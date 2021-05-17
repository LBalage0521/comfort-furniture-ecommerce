import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from '../../Firebase/Database';
import ProductType from './ProductType';

export default function ProductTypes() {

  const GetProductTypes = (collection) => {
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

  const { docs } = GetProductTypes('product-types');
  const history = useHistory();

  function handleOnClick ({target}) {
    history.push(`/products/${target.attributes.value.value}`);
  }

  return (
    <>
    <section className="products-section">
      <h1 className="text-center py-5 mb-0">Products</h1>
      <div className="row products-row d-flex align-items-strech">
        {docs && docs.map(doc => (
          <ProductType
            key={doc.id}
            handleOnClick={handleOnClick}
            url={doc.url}
            id={doc.id}
          />
        ))}
      </div>
    </section>
    </>
  )
}
