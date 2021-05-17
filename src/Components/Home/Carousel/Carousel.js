import React, { useEffect, useState } from 'react';
import { images } from "./CarouselData";

function Carousel() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      clickNext();
    }, 5000);
    return () => clearInterval(interval);
  },);

  function clickPrev() {
    if(currentImageIndex > 0 ) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
    else {
      setCurrentImageIndex(images.length - 1);
    };
  }

  function clickNext() {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
    else {
      setCurrentImageIndex(0);
    }
  }

  return (
    <div
      className="carousel slide"
      data-bs-ride="carousel"
      id="carousel-content">
      <div className="carousel-inner">
        <div className="carousel-item d-flex justify-content-center align-items-center">
          <img
            alt="Image1"
            className="d-block w-100 carousel-image"
            src={`${images[currentImageIndex].image}`}
          />
          <div className="carousel-caption d-none d-sm-block">
            <h5>{images[currentImageIndex].title}</h5>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      data-bs-slide="prev"
      data-bs-target="#carousel-content"
      onClick={clickPrev}
      type="button">
        <span
          aria-hidden="true"
          className="carousel-control-prev-icon"
        />
        <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      data-bs-slide="next"
      data-bs-target="#carousel-content"
      onClick={clickNext}
      type="button">
        <span
          aria-hidden="true"
          className="carousel-control-next-icon"
        />
        <span className="visually-hidden">Next</span>
    </button>
    </div>
  )
}

export default Carousel;