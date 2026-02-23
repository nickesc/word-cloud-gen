import "./StatusIndicator.css";

function StatusIndicator({status}: {status: "idle" | "loading" | "success" | "error"}) {
    let statusText: string;
    switch (status) {
        case "loading":
            statusText = "Loading...";
            break;
        case "error":
            statusText = "Error";
            break;
        default:
            statusText = "";
            break;
    }
    return (
        <div className={`status-indicator ${status}`}>
            <p>{statusText}</p>
        </div>
    );
}

export default StatusIndicator;
