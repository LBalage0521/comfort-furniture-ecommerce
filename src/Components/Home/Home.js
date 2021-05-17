import React from 'react';
import Carousel from './Carousel/Carousel';
import CustomerFeedback from './CustomerFeedback/CustomerFeedback';
import ProductContainer from './ProductContainer/ProductContainer';
import Services from './Services/Services';

export default function Home({addToCart, deleteFromCart, selectedItem}) {
  return (
    <>
    <Carousel/>
    <ProductContainer
      selectedItem={selectedItem}
      addToCart={addToCart}
      deleteFromCart={deleteFromCart}
    />
    <Services/>
    <CustomerFeedback/>
    </>
  )
}
