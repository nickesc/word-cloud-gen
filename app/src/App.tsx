import "./App.css";
import Header from "./components/Header";
import UrlInput from "./components/UrlInput";
import VisualizationPanel from "./components/VisualizationPanel";

function App() {
    return (
        <>
            <Header />
            <main>
                <VisualizationPanel />
                <UrlInput />
            </main>
        </>
    );
}

export default App;
