import React, { useState, useEffect } from 'react';
import { db } from '../../../Firebase/Database';
import CartModal from '../../Modals/CartModal';
import ImageModal from '../../Modals/ImageModal';
import ProductCard from '../../ProductCard/ProductCard';

export default function ProductContainer({addToCart, selectedItem}) {

  const [selectedImage, setSelectedImage] = useState({
    src: "",
    alt: "",
  });

  function handleModalImage ({target}) {
    setSelectedImage({
      src: target.src,
      alt: target.alt,
    });
  }

  function GetSpecialOffers(collection) {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
      const unsub = db.collection(collection)
        .onSnapshot(snap => {
          let documents = [];
          snap.forEach(doc => {
            documents.push({...doc.data(), id: doc.id});
          });
          setDocs(documents);
        });
      return () => unsub();
    }, [collection]);
    return { docs };
  }

  const { docs } = GetSpecialOffers("special-offers");
   
  return (
    <>
    <section className="special-offers-section d-flex flex-column align-items-stretch">
    <h1 className="text-center py-5">Special Offers</h1>
    <div className="row text-center">
      {docs.map((doc, index) => (
        <div
          className="col-sm-6 col-md-4 col-xl-3"
          key={index}
          onClick={handleModalImage}
        >
          <ProductCard
            addToCart={addToCart}
            cardTitle={doc.cardTitle}
            img={doc.url}
            price={doc.price}
            id={doc.id}
          />
          <ImageModal selectedImage={selectedImage}/>
          <CartModal img={selectedItem.img} price={selectedItem.price} title={selectedItem.title}/>
        </div>
      ))
      }
    </div>
    </section>
    </>
  )
}
