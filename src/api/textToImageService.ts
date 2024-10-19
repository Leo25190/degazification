import { PostTextToImageRequest } from "./types";
import axios from "axios";

export const fetchImage = async (request: PostTextToImageRequest, token: string, modelUrl: string) => {
    console.log("fetchImage request:", request);
    try {
        const response = await axios.post(modelUrl, request, {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
                "x-use-cache": "false",
            },
            responseType: "blob",
        });

        return URL.createObjectURL(response.data);
    } catch (error) {
        console.error("Error fetching image:", error);
        throw error;
    }
};
