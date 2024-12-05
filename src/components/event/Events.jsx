import React from "react";
import "./events.css";
import ImageSlider from "./ImageSlider.jsx";
import img1 from '../../../public/events.jpg.avif'
import img2 from '../../../public/clubs3.jpg'
import img3 from '../../../public/welcome2.jpg'
import img4 from '../../../public/logo2.png'
import img5 from '../../../public/hero.jpeg'
const Events = () => {
  const slides = [
    { url: "events.jpg.avif", title: "Quiz" },
    { url: "clubs3.jpg", title: "Quiz" },
    { url: "welcome2.jpg", title: "Quiz" },
    { url: "logo2.png", title: "Quiz" },
    { url: "hero.jpeg", title: "Quiz" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div className="master events">
      <div className="bg-image"></div>
      <h1 className="heading">Past Events & Workshops</h1>
      <div className="event-section">
          {/* <ImageSlider slides={slides} /> */}
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={img3} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
  );
};

export default Events;
