import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db, projectStorage } from '../../Firebase/Database';
import CartModal from '../Modals/CartModal';
import ImageModal from '../Modals/ImageModal';
import ProductCard from '../ProductCard/ProductCard';
import ProductGroupHeader from './ProductGroupHeader';

export default function ProductGroup({addToCart, selectedItem}) {

  let { id } = useParams();
  const [currentType, setCurrentType] = useState({});
  const [currentImage, setCurrentImage] = useState('');

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

  useEffect(() => {
      const currentGroupData = db.collection("product-types").doc(id);
      currentGroupData
      .get()
      .then((doc) => {
        setCurrentType({...doc.data(), id: doc.id});
        getCurrentPicture(id);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  },[id])

  async function getCurrentPicture(id) {
    let imageReference = projectStorage.refFromURL(`gs://photogallerylb.appspot.com/product-types/${id}.jpg`);
    await imageReference.getDownloadURL()
    .then((image) => {
      setCurrentImage(image);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function GetProductGroup (collection) {
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

  const { docs } = GetProductGroup (`${currentType.id}`);

  return (
    <>
    <section className="product-group-section d-flex flex-column align-items-stretch">
      <ProductGroupHeader
        currentImage={currentImage}
        currentType={currentType}
      />
      <h1 className="text-center py-5 mb-0">{currentType.id}</h1>
      <div className="row text-center">
        {docs && docs.map((doc, index) => (
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
        ))}
        </div>
    </section>
    </>
  )
}

