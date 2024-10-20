import { PostTextToImageRequest } from "../../../api/types";
import Input from "../../../common/components/Input";

interface Props {
    loading: boolean;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    request: PostTextToImageRequest;
    onRequestChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PromptForm: React.FC<Props> = ({ loading, onSubmit, request, onRequestChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <Input type="text" id="inputs" value={request.inputs} label="Prompt" onChange={onRequestChange} className="mt-3" />
            <div className="row">
                <Input type="text" id="negative_prompt" label="Negative Prompt" value={request.negative_prompt || ""} onChange={onRequestChange} className="col-12 col-md-6 mt-3" />
                <Input type="number" id="seed" label="Seed" value={request.seed?.toString() || ""} onChange={onRequestChange} className="col-12 col-md-6 mt-3" />
            </div>
            <div className="row">
                <Input type="range" id="guidance_scale" label="Guidance" value={request.guidance_scale} min={1.5} max={10} step={0.5} onChange={onRequestChange} className="col-12 col-md-6 mt-3" />
                <Input type="range" id="num_inference_steps" label="Denoising Steps" value={request.num_inference_steps} min={1} max={50} step={1} onChange={onRequestChange} className="col-12 col-md-6 mt-3" />
            </div>
            <button type="submit" className="btn btn-primary me-2 mt-3" disabled={loading}>
                Generate Image
            </button>
        </form>
    );
};

export default PromptForm;
