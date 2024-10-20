import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageDisplay from "../../../common/components/ImageDisplay/ImageDisplay";
import { useState } from "react";
import TextToImageForm from "./TextToImageForm";
import { showLoadingToast, updateToast } from "../../../common/utils/toastNotificationUtils";
import { fetchImage } from "../../../api/textToImageService";
import { PostTextToImageRequest } from "../../../api/types";
import { textToImageModels } from "../constants/textToImageModels";
import Input from "../../../common/components/Input";
import useLocalStorage from "../../../common/hooks/useLocalStorage";
import { TextToImageSettings } from "../../../common/models/settings/TextToImageSettings";
import { updateObjectProperties } from "../../../common/utils/formUtils";
import SelectInput from "../../../common/components/SelectInput";
import PageTitle from "../../../common/components/PageTitle";

const TextToImage = () => {
    const [imagesSrc, setImagesSrc] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [request, setRequest] = useState<PostTextToImageRequest>({ inputs: "", negative_prompt: "difform, not good, perspective errors", guidance_scale: 2.5, num_inference_steps: 30, seed: 42, target_size: { height: 512, width: 512 } });
    const [modelUrl, setModelUrl] = useState(textToImageModels[0].apiBaseUrl);
    const [settings] = useLocalStorage<TextToImageSettings>("textToImageSettings", { token: "" });

    const handleModelSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setModelUrl(textToImageModels[parseInt(e.target.value)].apiBaseUrl);
    };

    const handleRequestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRequest(updateObjectProperties(e, request));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const toastId = showLoadingToast("Generating image...");
        fetchImage(request, settings.token, modelUrl)
            .then((res) => {
                updateToast(toastId, "Image generated successfully", "success");
                setImagesSrc((prevSrc) => prevSrc.concat(res));
                setIsLoading(false);
            })
            .catch(() => {
                updateToast(toastId, "Image failed to generate", "error");
                setIsLoading(false);
            });
    };

    return (
        <>
            <PageTitle>Text To Image Gen</PageTitle>
            <div className="row">
                <SelectInput className="col" id="model-select" type="select" label="Model" onChange={handleModelSelectChange} options={textToImageModels.map((model, index) => ({ label: model.name, value: index }))} />
            </div>
            <TextToImageForm loading={isLoading} request={request} onRequestChange={handleRequestChange} onSubmit={handleSubmit} />
            <ImageDisplay urls={imagesSrc} />
            <ToastContainer />
        </>
    );
};

export default TextToImage;
