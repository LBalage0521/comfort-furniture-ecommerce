import React from 'react';

export default function CartModal({img, price, title}) {

  return (
    <div className="container">
      <div className="modal fade cart-modal" id="cart-modal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header ps-5 py-3 d-flex modal-header">
              <h4 className="modal-title">Added To Cart</h4>
                <i className="fas fa-times mb-3" data-dismiss="modal"/>
            </div>
            <div className="modal-body d-flex text-start row m-0 w-100">
              <p className="mb-1">Product Name: {title}</p>
              <p className="mb-1">Price: {price} $</p>
              <div className="cart-modal-imageDiv d-flex w-100">
                <img  className="w-100" src={img} alt={img}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
