import React from 'react';

export default function ImageModal({selectedImage}) {
  return (
    <div className="container">
      <div className="modal fade image-modal" id="image-modal" role="dialog">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-body d-flex justify-content-center row m-0 p-0 w-100">
              <img alt="selectedPic" src={selectedImage.src} className="p-0"/>
              <button type="button" data-dismiss="modal">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
