import { PostTextToImageRequest } from "../api/hfTextToImageApi/types";
import TextInput from "./TextInput";
import { TextToImageSettings } from "../models/settings/TextToImageSettings";
import useLocalStorage from "../hooks/useLocalStorage";
import { updateObjectProperties } from "../utils/formUtils";

interface Props {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    isLoading: boolean;
    request: PostTextToImageRequest;
    setRequest: React.Dispatch<React.SetStateAction<PostTextToImageRequest>>;
}

const PromptForm: React.FC<Props> = ({ onSubmit, isLoading, request, setRequest }) => {
    const [settings, setSettings] = useLocalStorage<TextToImageSettings>("textToImageSettings", { token: "" });

    return (
        <>
            <form onSubmit={onSubmit}>
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
