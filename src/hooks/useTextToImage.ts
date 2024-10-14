import { useState } from "react";
import { fetchImage } from "../api/hfTextToImageApi/service";
import { PostTextToImageRequest } from "../api/hfTextToImageApi/types";

const useTextToImage = (request: PostTextToImageRequest, token: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [imageSrc, setImageSrc] = useState<string[]>([]);

    const submit = async () => {
        setIsLoading(true);
        try {
            const result = await fetchImage(request, token);
            setImageSrc((prevSrc) => prevSrc.concat(result));
            return { success: true, message: "Image generated successfully" };
        } catch {
            return { success: false, message: "Image failed to generate" };
        } finally {
            setIsLoading(false);
        }
    };

    return { submit, isLoading, imageSrc };
};

export default useTextToImage;
