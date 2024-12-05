import React, { useState } from "react";

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderStyles = {
        height: "100%",
        position: "relative",
    };
    const slidesStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    };
    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(-400%, -50%)",
        left: "32px",
        fontSize: "45px",
        // zIndex: "1",
        cursor: "pointer",
    };
    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(400%, -50%)",
        right: "32px",
        fontSize: "45px",
        // zIndex: "1",
        cursor: "pointer",
    };
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <div style={sliderStyles}>
            <div style={slidesStyles}></div>
            <div className="slider-container">
                <div className="left-arrow" style={leftArrowStyles} onClick={goToPrevious}><i class="fa-solid fa-chevron-left"></i></div>
                <div className="right-arrow" style={rightArrowStyles} onClick={goToNext}><i class="fa-solid fa-chevron-right"></i></div>
            </div>
        </div>
    )
};

export default ImageSlider;