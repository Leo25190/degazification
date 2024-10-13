import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import TextToImage from "./pages/TextToImage";

function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="*" element={<div>404 Not Found</div>} />
                    <Route index element={<HomePage />} />
                    <Route path="/text-to-image" element={<TextToImage />} />
                    {/* Add more routes here */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
