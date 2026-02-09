import "./App.css";
import {useState, useCallback} from "react";
import Header from "./components/Header";
import UrlInput from "./components/UrlInput";
import VisualizationPanel from "./components/VisualizationPanel";
import type {Keyword} from "./types";

const API_BASE = "http://localhost:8127";

function App() {
    const [url, setUrl] = useState("");
    const [keywords, setKeywords] = useState<Keyword[]>([]);

    const onAnalyze = useCallback(async (nextUrl: string) => {
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
        } catch (err) {
            setKeywords([]);
            console.error(err);
        }
    }, []);

    return (
        <>
            <Header />
            <main>
                <VisualizationPanel keywords={keywords} />
                <UrlInput onAnalyze={onAnalyze} />
            </main>
        </>
    );
}

export default App;
