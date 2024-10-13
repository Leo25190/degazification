import { useState } from "react";
import { fetchImage2 } from "../api/hfTextToImageApi/service";
import { PostTextToImageRequest } from "../api/hfTextToImageApi/types";

const useImageGenerator = (request: PostTextToImageRequest, token: string) => {
    const [isLoading, setIsLoading] = useState(false);
    const [imageSrc, setImageSrc] = useState<string[]>([]);

    const submit = async () => {
        setIsLoading(true);
        try {
            const result = await fetchImage2(request, token);
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

export default useImageGenerator;
