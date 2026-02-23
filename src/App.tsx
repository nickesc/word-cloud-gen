import "./App.css";
import {useState, useCallback, useEffect} from "react";
import Header from "./components/Header";
import UrlInput from "./components/UrlInput";
import VisualizationPanel from "./components/VisualizationPanel";
import StatusIndicator from "./components/StatusIndicator";
import type {Keyword} from "./types";

const API_BASE = "http://localhost:8127";

function App() {
    const [url, setUrl] = useState("");
    const [keywords, setKeywords] = useState<Keyword[]>([]);
    const [articles, setArticles] = useState<string[]>([]);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    useEffect(() => {
        const fetchArticles = async () => {
            const res = await fetch(`${API_BASE}/articles`);
            if (!res.ok) {
                console.error(`GET /articles failed (${res.status})`);
                return;
            }
            const data = await res.json();
            setArticles(data.articles);
        };
        fetchArticles();
    }, []);

    const onAnalyze = useCallback(async (nextUrl: string) => {
        setStatus("loading");
        try {
            const res = await fetch(`${API_BASE}/analyze`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({url: nextUrl}),
            });

            if (!res.ok) {
                let detail = "";
                try {
                    const body = (await res.json()) as {detail?: string};
                    detail = body?.detail ? `: ${body.detail}` : "";
                } catch {
                    // ignore JSON parse errors
                }
                throw new Error(`POST /analyze failed (${res.status})${detail}`);
            }

            const data = await res.json();
            setUrl(nextUrl);
            setKeywords(data.keywords ?? []);
            console.log(keywords);
            setStatus("success");
        } catch (err) {
            setKeywords([]);
            console.error(err);
            setStatus("error");
        }
    }, []);

    return (
        <>
            <Header />
            <main>
                <VisualizationPanel keywords={keywords} />
                <StatusIndicator status={status} />
                <UrlInput onAnalyze={onAnalyze} articles={articles} />
            </main>
        </>
    );
}

export default App;
