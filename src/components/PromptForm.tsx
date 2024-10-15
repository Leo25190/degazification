import { PostTextToImageRequest } from "../api/hfTextToImageApi/types";
import TextInput from "./TextInput";
import { TextToImageSettings } from "../models/settings/TextToImageSettings";
import useLocalStorage from "../hooks/useLocalStorage";
import { updateObjectProperties } from "../utils/formUtils";
import { useState } from "react";
import { showLoadingToast, updateToast } from "../utils/toastNotificationUtil";
import { fetchImage } from "../api/hfTextToImageApi/service";

interface Props {
    setImagesList: React.Dispatch<React.SetStateAction<string[]>>;
}

const PromptForm: React.FC<Props> = ({ setImagesList }) => {
    const [settings, setSettings] = useLocalStorage<TextToImageSettings>("textToImageSettings", { token: "" });
    const [request, setRequest] = useState<PostTextToImageRequest>({ inputs: "", negative_prompt: "difform, not good, perspective errors", guidance_scale: 2.5, num_inference_steps: 30, height: 512, width: 512, seed: 42 });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();
        const toastId = showLoadingToast("Generating image...");
        fetchImage(request, settings.token)
            .then((res) => {
                updateToast(toastId, "Image generated successfully", "success");
                setImagesList((prevSrc) => prevSrc.concat(res));
            })
            .catch(() => updateToast(toastId, "Image failed to generate", "error"));
        setIsLoading(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextInput type="text" value={settings.token} name="token" label="Token" onChange={(e) => setSettings(updateObjectProperties(e, settings))} />
                <div className="row">
                    <div className="col-12 col-md-6 mt-3">
                        <TextInput type="text" value={request.inputs} name="inputs" label="Input" onChange={(e) => setRequest(updateObjectProperties(e, request))} />
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <TextInput type="text" value={request.negative_prompt || ""} name="negative_prompt" label="Negative Prompt" onChange={(e) => setRequest(updateObjectProperties(e, request))} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3 mt-3">
                        <TextInput type="number" value={request.width?.toString() || ""} name="width" label="Width" onChange={(e) => setRequest(updateObjectProperties(e, request))} />
                    </div>
                    <div className="col-12 col-md-3 mt-3">
                        <TextInput type="number" value={request.height?.toString() || ""} name="height" label="Height" onChange={(e) => setRequest(updateObjectProperties(e, request))} />
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <TextInput type="number" value={request.seed?.toString() || ""} name="seed" label="Seed" onChange={(e) => setRequest(updateObjectProperties(e, request))} />
                    </div>
                </div>
                <label htmlFor="guidance_range" className="form-label mt-3">
                    Guidance Scale
                </label>
                <input type="range" className="form-range" min="1.5" max="5" step="0.1" id="guidance_scale" value={request.guidance_scale} onChange={(e) => setRequest(updateObjectProperties(e, request))} />
                <label htmlFor="num_inference_steps" className="form-label mt-3">
                    Denoising Steps
                </label>
                <input type="range" className="form-range" min="1" max="50" step="1" id="num_inference_steps" value={request.num_inference_steps} onChange={(e) => setRequest(updateObjectProperties(e, request))} />
                <div className="d-flex align-items-center mt-2">
                    <button type="submit" className="btn btn-primary me-2" disabled={isLoading}>
                        Generate Image
                    </button>
                </div>
            </form>
        </>
    );
};

export default PromptForm;
