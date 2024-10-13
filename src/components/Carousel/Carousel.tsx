import { useState } from "react";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";

const Carousel = (imagesSrc: string[]) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const reversedUrls = [...imagesSrc].reverse();

    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {reversedUrls.map((url, index) => (
                    <div key={index} className={`carousel-item ${index === currentIndex ? "active" : ""}`}>
                        <img src={url} className="d-block w-100 img-border" alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>

            <PrevButton onClick={() => setCurrentIndex((currentIndex - 1 + reversedUrls.length) % reversedUrls.length)} />

            <NextButton onClick={() => setCurrentIndex((currentIndex + 1) % reversedUrls.length)} />
        </div>
    );
};

export default Carousel;
