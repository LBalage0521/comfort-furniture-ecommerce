import React from 'react';

export default function ProductType({id, url, handleOnClick}) {
  return (
    <div className="col-sm-6 col-lg-4 products-col mb-4 text-center" onClick={handleOnClick}>
      <div className="rounded-top">
        <img src={url} className="w-100" alt={url} value={id}/>
      </div>
      <h4 className="rounded-bottom py-2 mb-0" value={id}>{id}</h4>
    </div>
  )
}