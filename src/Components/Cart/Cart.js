import React,  { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Cart({
    cartContent, deleteFromCart, decreaseQuantity, increaseQuantity, removeAllFromCart, subtotal, setSubtotal
}) {

  const cartItems = cartContent;
  const history = useHistory();

  function goToSummary() {
    history.push('/cart/summary');
  }

  useEffect(() => {
    function countSubtotal() {
      let itemsNumber = cartItems.length;
      let amount = 0;
      for(let i=0; i<itemsNumber; i++) {
        let x = cartItems[i].price * cartItems[i].quantity;
        amount += x;
      }
      return amount;
    }
    setSubtotal(countSubtotal())
    // eslint-disable-next-line
  }, [cartItems]);

  return (
    <>
    <section className="cart-section">
      <h1 className="text-center py-5 mb-0">Cart Content</h1>
      <div className="container">
        {cartItems.map((doc, index) => (
          <div className="row d-flex" key={index}>
            <hr/>
            <div className="col-lg-3 d-flex imageDiv">
              <img className="align-self-start d-lg-flex mb-3" src={doc.img} alt={doc.img}/>
            </div>
            <div className="col-lg-6">
              <h5>Product name: {doc.title}</h5>
              <h5>Price: {doc.price} $</h5>
              <h5>Quantity:
                <span className="px-3" dataserialnumber={index} onClick={decreaseQuantity}>-</span>
                <span className="px-3">
                  <strong dataserialnumber={index}>{doc.quantity}</strong>
                </span>
                <span className="px-3" dataserialnumber={index} onClick={increaseQuantity}>+</span>
              </h5>
              <div className="mb-3">
                <button id={doc.id} onClick={deleteFromCart}>Remove</button>
              </div>
            </div>
            <hr/>
          </div>
        ))}
          <div className="col-md-12 d-flex justify-content-end mb-3">
            <h5 className="mb-0">Subtotal: {subtotal} $</h5>
          </div>
          <div className="col-md-12 d-flex justify-content-end mb-3">
            <button onClick={goToSummary}>
              Order
            </button>
          </div>
          <div className="col-md-12 d-flex justify-content-end mb-3">
            <button onClick={removeAllFromCart}>Empty Cart</button>
          </div>
        </div>
    </section>
    </>
  )
}