import { HashRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import HomePage from "./common/components/HomePage";
import TextToImage from "./features/textToImage/components/TextToImage";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="*" element={<div>404 Not Found</div>} />
                    <Route index element={<HomePage />} />
                    <Route path="text-to-image" element={<TextToImage />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
