import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.jpg';

export default function Navbar({cartContent}) {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <img src={logo} alt="logo" className="d-none d-md-flex"></img>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item d-flex align-items-center">
              <Link className="link my-1 my-md-0 pt-2 pt-md-0" to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link link dropdown-toggle my-1 my-md-0 p-0" href="/products"
                id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </a>
              <ul className="dropdown-menu mt-2" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item fw-bold" to="/products">All products</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item fw-bold" to="/products/accessories">Accessories</Link></li>
                <li><Link className="dropdown-item fw-bold" to="/products/bedroom">Bedroom</Link></li>
                <li><Link className="dropdown-item fw-bold" to="/products/dinningroom">Dinnigroom</Link></li>
                <li><Link className="dropdown-item fw-bold" to="/products/hallway">Hallway</Link></li>
                <li><Link className="dropdown-item fw-bold" to="/products/kitchen">Kitchen</Link></li>
                <li><Link className="dropdown-item fw-bold" to="/products/livingroom">Livingroom</Link></li>
                <li><Link className="dropdown-item fw-bold" to="/products/mattress">Mattress</Link></li>
                <li><Link className="dropdown-item fw-bold" to="/products/office">Office</Link></li>
                <li><Link className="dropdown-item fw-bold" to="/products/teensroom">Teensroom</Link></li>
              </ul>
            </li>
            <li className="nav-item d-flex align-items-center">
              <Link className="link my-1 my-md-0" to="/blog">Blog</Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <Link className="link my-1 my-md-0" to="/contact">Contact</Link>
            </li>
            <li className="nav-item d-flex align-items-center">
              <Link className="link my-1 my-md-0 pb-2 pb-md-0" to="/cart">
                <span className="pe-2 ">Cart</span>
                <i className="fas fa-shopping-basket"/>
                <span className="cart-text">
                  <small className="cart-amount">
                    {cartContent && `(${cartContent.length})`}
                  </small>
                </span>

              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
