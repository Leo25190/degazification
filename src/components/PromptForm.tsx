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
    const [request, setRequest] = useState<PostTextToImageRequest>({ inputs: "", negative_prompt: "" });
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
                <TextInput value={settings.token} name="token" label="Token" onChange={(e) => setSettings(updateObjectProperties(e, settings))} />
                <div className="row">
                    <div className="col-12 col-md-6 mt-3">
                        <TextInput value={request.inputs} name="inputs" label="Input" onChange={(e) => setRequest(updateObjectProperties(e, request))} />
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <TextInput value={request.negative_prompt || ""} name="negative_prompt" label="Negative Prompt" onChange={(e) => setRequest(updateObjectProperties(e, request))} />
                    </div>
                </div>
                <div className="d-flex align-items-center mt-2">
                    <button type="submit" className="btn btn-primary me-2" disabled={isLoading}>
                        Generate Image
                    </button>
                </div>
            </form>
            {/* <ImageDisplay urls={imageSrc} />
            <ToastContainer /> */}
        </>
    );
};

export default PromptForm;
