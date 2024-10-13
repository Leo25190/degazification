import React, { useState } from "react";
import { fetchImage2 } from "../api/hfTextToImageApi/service";
import { PostTextToImageRequest } from "../api/hfTextToImageApi/types";
import TextInput from "./TextInput";
import ImageDisplay from "./ImageDisplay/ImageDisplay";
import { showLoadingToast, updateToast } from "../utilities/toastNotificationUtility";
import { ToastContainer } from "react-toastify";

const PromptForm = () => {
    const [token, setToken] = useState(() => {
        // Retrieve the token from localStorage if it exists
        const savedToken = localStorage.getItem("token");
        return savedToken || "";
    });

    // Update localStorage whenever the token changes
    React.useEffect(() => {
        localStorage.setItem("token", token);
    }, [token]);
    const [request, setData] = useState<PostTextToImageRequest>({ inputs: "", negative_prompt: "" });
    const [imageSrc, setImageSrc] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleRequestChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const newRequest: PostTextToImageRequest = {
            ...request,
            [e.target.name]: e.target.value,
        };
        setData(newRequest);
    }

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Set loading state to true when the request is initiated
        setIsLoading(true);
        const toastId = showLoadingToast("Generating image...");
        console.log(toastId);

        // Simulate a fetch call for the image
        fetchImage2(request, token)
            .then((result) => {
                setImageSrc(imageSrc.concat(result));
                updateToast(toastId.toString(), "Image generated successfully", "success");

                console.log(toastId);
            })
            .catch(() => {
                updateToast(toastId.toString(), "Image failed to generate", "error");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            <div className="container mt-3">
                <form onSubmit={(e) => submit(e)}>
                    <TextInput value={token} name="token" label="token" onChange={(e) => setToken(e.target.value)} />
                    <div className="row mt-3">
                        <div className="col-8">
                            <TextInput value={request.inputs} name="inputs" label="Input" onChange={(e) => handleRequestChange(e)} />
                        </div>

                        <div className="col-4">
                            <TextInput
                                value={request.negative_prompt || ""}
                                name="negative_prompt"
                                label="Negative Prompt"
                                onChange={(e) => handleRequestChange(e)}
                            />
                        </div>
                    </div>

                    <div className="d-flex align-items-center mt-2">
                        <button type="submit" className="btn btn-primary me-2" disabled={isLoading}>
                            Generate Image
                        </button>
                    </div>
                </form>

                <ImageDisplay urls={imageSrc} />
                <ToastContainer />
            </div>
        </>
    );
};

export default PromptForm;
