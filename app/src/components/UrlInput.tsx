import type {SubmitEvent} from "react";
import {useState} from "react";

function UrlInput({onAnalyze}: {onAnalyze: (url: string) => Promise<void>}) {
    const [url, setUrl] = useState("");

    function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(url);
        onAnalyze(url);
    }

    return (
        <form id="url-input-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter article URL"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
            />
            <button type="submit">Analyze</button>
        </form>
    );
}

export default UrlInput;
