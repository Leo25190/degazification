import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./ImageDisplay.css";

interface ImageDisplayProps {
    urls: string[];
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ urls }) => {
    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleImageClick = (index: number) => {
        setIndex(index);
        setShowModal(true);
    };

    if (!urls || urls.length === 0) {
        return <div>No images to display</div>;
    }

    const reversedUrls = [...urls].reverse();

    return (
        <div>
            <div className="row">
                {reversedUrls.map((url, index) => (
                    <div className="col-12 col-sm-6 col-md-4 col-xl-3 pt-4" key={index}>
                        <img src={url} alt={`Gallery image ${index}`} className="gallery-item" width="100%" onClick={() => handleImageClick(index)} />
                    </div>
                ))}
            </div>

            <Modal size="lg" show={showModal} onHide={handleClose} centered>
                <Modal.Body className="p-0">
                    <Carousel className="carousel-fade" activeIndex={index} onSelect={(index) => setIndex(index)}>
                        {reversedUrls.map((url, index) => (
                            <Carousel.Item key={index}>
                                <img src={url} className="d-block w-100 rounded-3" alt={`Gallery image ${index}`} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ImageDisplay;
