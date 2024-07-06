import React, { useState, useEffect } from "react";
import image1 from "./assets/g20.jpeg";
import image2 from "./assets/g5.jpg";
import image3 from "./assets/g7.jpeg";

function BackgroundSlideShow() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [image1, image2, image3];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <div
            className="background-slideshow"
            style={{
                backgroundImage: `url(${images[currentImage]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
            }}
        />
    );
}

export default BackgroundSlideShow;
