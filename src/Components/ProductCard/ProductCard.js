import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({addToCart, cardFooter="Add to cart", cardTitle, check, id, img, price}) {

  return (
    <div className="card border-0 shadow mb-5" id={id}>
      <img
        src={img}
        alt={img}
        className="card-img-top"
        data-toggle="modal"
        data-target={"#image-modal"}
        />
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <h6 className="card-subtitle text-muted mb-4">{price} $</h6>
        <div className="d-flex justify-content-evenly product-pic">
          <Link to="#"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Like">
          <i className="fas fa-thumbs-up"/>
          </Link>
          <Link to="#"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Info">
          <i className="fas fa-info-circle"/>
          </Link>
          <Link to="#"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Share">
            <i className="fas fa-share-alt"/>
          </Link>
        </div>
        <div className="card-footer text-center mt-3">
          <button
              className="w-100"
              data-toggle="modal"
              data-target={"#cart-modal"}
              id={id}
              img={img}
              price={price}
              title={cardTitle}
              onClick={addToCart}
              type="sumbit">
            {cardFooter}
          </button>
        </div>
      </div>
    </div>
  )
}
