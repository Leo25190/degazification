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
                        Flux1-Schnell
                    </a>
                </h1>
                <p>
                    To obtain your access token, please <a href="https://huggingface.co/login">log in</a> or <a href="https://huggingface.co/join">sign up</a> at <a href="https://huggingface.co/">Hugging Face</a>.
                </p>
                <p>
                    Once logged in, click on your <strong>profile icon</strong>, navigate to <strong>Settings &gt; Access Tokens</strong>, and create a new token.
                </p>
                <p>
                    Name your token, for example, <i>"degazification-token"</i>, and change the permission level from{" "}
                    <strong>
                        <i>Fine-grained</i>
                    </strong>{" "}
                    to{" "}
                    <strong>
                        <i>Read</i>
                    </strong>
                    .
                </p>
                <p>Copy the generated token and paste it in the input field below.</p>
                <p>
                    <small>More models and customization options will be available soon. Width and height don't work for now...</small>
                </p>
            </div>

            <PromptForm setImagesList={setImagesSrc} />
            <ImageDisplay urls={imagesSrc} />
            <ToastContainer />
        </Container>
    );
};

export default TextToImage;
