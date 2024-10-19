export interface TextToImageModel {
    name: string;
    description: string;
    apiBaseUrl: string;
}

export const textToImageModels: TextToImageModel[] = [
    {
        name: "FLUX 1-SCHNELL",
        description: "Fast and high-quality image generation model",
        apiBaseUrl: "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
    },
    {
        name: "FLUX 1-Dev",
        description: "Better quality image generation model",
        apiBaseUrl: "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
    },
];
