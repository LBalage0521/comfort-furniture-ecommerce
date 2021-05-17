import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogArticleContent({article, comments, content, currentImage, datetime, time}) {
  return (
    <section className="blog-article-section">
      <h1 className="text-center py-5 mb-0">{article}</h1>
      <div className="row d-flex justify-content-center">
          <div className="col-md-4 d-flex justify-content-center row image-div">
            <img className="align-self-start d-md-flex mb-3" src={currentImage} alt={currentImage}/>
          </div>
          <div className="col-md-8 mb-5">
            <div className="media d-flex">
              <div className="media-body">
              <span className="small">{datetime}</span>
              <strong className="px-2">·</strong>
              <span className="small">{time} mins</span>
              <strong className="px-2">·</strong>
              <span className="small">{comments} comments</span>
              <p className="content">{content}</p>
            </div>
          </div>
          <Link className="fw-bold back" to={"/blog"}>Back</Link>
          </div>
        </div>
    </section>
  )
}
