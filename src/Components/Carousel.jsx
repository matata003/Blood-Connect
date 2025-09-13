import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./CustomNavbar";


const Carousel = () => {
  return (
   <div className="carousel-wrapper">

  <div
    id="carouselExampleSlidesOnly"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="images/carousel6.png" alt="Slide 1" />
      </div>
      <div className="carousel-item">
        <img src="images/Carousel1.png" alt="Slide 2" />
      </div>
      <div className="carousel-item">
        <img src="images/Carousel3.png" alt="Slide 3" />
      </div>
    </div>
  </div>
</div>

  );
};

export default Carousel;
