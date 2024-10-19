import { PostTextToImageRequest } from "../../../api/types";
import TextInput from "../../../common/components/FloatingInput";

interface Props {
    loading: boolean;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    request: PostTextToImageRequest;
    onRequestChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PromptForm: React.FC<Props> = ({ loading, onSubmit, request, onRequestChange }) => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-12 col-md-6 mt-3">
                        <TextInput type="text" value={request.inputs} name="inputs" label="Input" onChange={onRequestChange} />
                    </div>
                    <div className="col-12 col-md-6 mt-3">
                        <TextInput type="text" value={request.negative_prompt || ""} name="negative_prompt" label="Negative Prompt" onChange={onRequestChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 mt-3">
                        <TextInput type="number" value={request.seed?.toString() || ""} name="seed" label="Seed" onChange={onRequestChange} />
                    </div>
                </div>

                <label htmlFor="guidance_range" className="form-label mt-3">
                    Guidance Scale
                </label>
                <input type="range" className="form-range" min="1.5" max="10" step="0.5" id="guidance_range" value={request.guidance_scale} onChange={onRequestChange} />

                <label htmlFor="num_inference_steps" className="form-label mt-3">
                    Denoising Steps
                </label>
                <input type="range" className="form-range" min="1" max="50" step="1" id="num_inference_steps" value={request.num_inference_steps} onChange={onRequestChange} />
                <div className="d-flex align-items-center mt-2">
                    <button type="submit" className="btn btn-primary me-2" disabled={loading}>
                        Generate Image
                    </button>
                </div>
            </form>
        </>
    );
};

export default PromptForm;
