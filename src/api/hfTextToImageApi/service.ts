import { PostTextToImageRequest } from "./types";
import { TextToImageModel, textToImageModels } from "../../constants/textToImageModels";

export const fetchImage = async (request: PostTextToImageRequest, token: string, model: TextToImageModel = textToImageModels[0]) => {
    try {
        const response = await fetch(model.apiBaseUrl, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(request),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const res = await response.blob();
        return URL.createObjectURL(res);
    } catch (error) {
        console.error("Error fetching image:", error);
        throw error;
    }
};
