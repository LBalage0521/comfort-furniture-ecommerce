import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-4 text-center text-md-start footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="mb-3 text-white">Navigation</h4>
            <nav className="nav flex-column">
              <Link className="link mb-2" to="/">Home</Link>
              <Link className="link mb-2" to="/products">Products</Link>
              <Link className="link mb-2" to="/blog">Blog</Link>
              <Link className="link mb-2" to="/contact">Contact</Link>
              <Link className="link mb-2" to="/cart">Cart</Link>
            </nav>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="mb-3 text-white">Partners</h4>
            <nav className="nav flex-column">
              <Link className="link mb-2" to="#">ADA</Link>
              <Link className="link mb-2" to="#">Best Dream</Link>
              <Link className="link mb-2" to="#">Black Red White</Link>
              <Link className="link mb-2" to="#">Nolte</Link>
              <Link className="link mb-2" to="#">Rauch</Link>
            </nav>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <address className="text-white">
            <h4 className="mb-3 text-white">Comfort Furniture</h4>
              13 Dobo Katica Street,<br/>
              Tokodaltaro 2532<br/>
              Hungary
              <p>+36/30-281-70-18</p>
            </address>
            <nav className="nav justify-content-center justify-content-md-start">
              <Link className="me-2" to="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Facebook">
                <i className="fab fa-facebook-square fa-2x text-white"/>
              </Link>
              <Link className="me-2" to="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Twitter">
                <i className="fab fa-twitter-square fa-2x text-white"/>
              </Link>
              <Link to="#"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Instagram">
                <i className="fab fa-instagram-square fa-2x text-white"/>
              </Link>
            </nav>            
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="text-center">
            <h5 className="mt-3 mb-0 text-white">
            Copyright © 2021 Comfort Furniture Ltd.
            </h5>
          </div>
        </div>
      </div>
    </footer>
  )
}