export interface PostTextToImageRequest {
    inputs: string;
    negative_prompt?: string;
    guidance_scale?: number;
    num_inference_steps?: number;
    target_size: {
        height?: number;
        width?: number;
    };
    seed?: number;
}
