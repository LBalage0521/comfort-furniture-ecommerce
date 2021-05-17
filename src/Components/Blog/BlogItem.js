import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogItem({article, comments, content, datetime, id, img, time, value}) {
  return (
      <div className="container" id={id}>
        <div className="row">
          <div className="col-md-3 d-flex justify-content-center">
            <img className="align-self-start d-md-flex mb-3" src={img} alt={img}/>
          </div>
          <div className="col-md-9 mb-5">
            <div className="media d-flex">
              <div className="media-body">
                <Link className="article-link" to={`/blog/${value}`}>
                  <h5 className="mt-0 fw-bold">{article}</h5>
                </Link>
                <strong className="small">{datetime}</strong>
                <strong className="px-2">·</strong>
                <strong className="small">{time}</strong> mins
                <strong className="px-2">·</strong>
                <strong className="small">{comments} comments</strong>
                <p className="mt-3">{content}</p>
                <Link className="fw-bold read-more" to={`/blog/${value}`}>
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
