import React from 'react';

export default function ProductGroupHeader({currentImage}) {
  return (
    <>
    <div className="carousel" data-bs-ride="carousel" id="carousel-content">
      <div className="carousel-inner">
        <div className="carousel-item d-flex justify-content-center align-items-center m-0">
          <img alt={currentImage} className="d-block w-100 carousel-image" src={currentImage}/>
        </div>
      </div>
    </div>
    </>
  )
}
