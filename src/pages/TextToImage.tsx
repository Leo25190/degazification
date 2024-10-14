import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageDisplay from "../components/ImageDisplay/ImageDisplay";
import PromptForm from "../components/PromptForm";
import { useState } from "react";

const TextToImage = () => {
    const [imagesSrc, setImagesSrc] = useState<string[]>([]);

    return (
        <Container className="mt-3">
            <div className="d-none d-md-block">
                <h1>
                    Text to Image &gt;{" "}
                    <a href="https://huggingface.co/black-forest-labs/FLUX.1-schnell" target="_blank" rel="noopener noreferrer">
                        Flux1.-Schnell
                    </a>
                </h1>
                <p>
                    To get your token, you must <a href="https://huggingface.co/login">login</a>/<a href="https://huggingface.co/join">sign up</a> to <a href="https://huggingface.co/">Hugging Face</a>
                </p>
                <p>
                    Once you're connected to HF, you just have to click on your <strong>profile icon</strong> and then go to <strong>Settings &gt; Access Tokens</strong> to create a new token.
                </p>
                <p>
                    Give your token a name like <i>"degazification-token"</i> and change{" "}
                    <strong>
                        <i>Fine-grained</i>
                    </strong>{" "}
                    to{" "}
                    <strong>
                        <i>Read</i>
                    </strong>
                </p>
                <p>Copy the token and paste it in the input below.</p>
                <p>
                    <small>Other models and will be soon available and even custom models</small>
                </p>
            </div>

            <PromptForm setImagesList={setImagesSrc} />
            <ImageDisplay urls={imagesSrc} />
            <ToastContainer />
        </Container>
    );
};

export default TextToImage;
