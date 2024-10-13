export interface TextToImageModel {
    name: string;
    slug: string;
    description: string;
    apiBaseUrl: string;
}

export const textToImageModels: TextToImageModel[] = [
    {
        name: "FLUX 1-schnell",
        slug: "flux-1-schnell",
        description: "Fast and high-quality image generation model",
        apiBaseUrl: "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
    },
];
