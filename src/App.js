import './App.scss';
import React from 'react';
import { useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from './Components/Blog/Blog';
import BlogArticle from './Components/Blog/BlogArticle';
import Cart from './Components/Cart/Cart';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import ProductGroup from './Components/Products/ProductGroup';
import ProductTypes from './Components/Products/ProductTypes';
import Summary from './Components/Summary/Summary';

export default function App() {

  const [cartContent, setCartContent] = useState([]);
  const [selectedItem, setSelectedItem] = useState({
    img: "",
    price: "",
    title: "",
    id: "",
    quantity: 1,
  });
  const [subtotal, setSubtotal] = useState(null);

  function addToCart ({target}) {
    const checkingItem = cartContent.find(product => product.id === target.id);
    if (checkingItem) {
      let newContent = [...cartContent];
      let index = newContent.indexOf(checkingItem);
      newContent[index].quantity += 1;
      setCartContent(newContent);
    }
    else {
      setSelectedItem({
        img: target.attributes.img.value,
        price: target.attributes.price.value,
        title: target.title,
        id: target.id,
        quantity: 1,
      });
      setCartContent([
        ...cartContent,
        {
          img: target.attributes.img.value,
          price: target.attributes.price.value,
          title: target.title,
          id: target.id,
          quantity: 1,
        }
      ]);
    }
  }

  function deleteFromCart({target}) {
    setCartContent(
      cartContent.filter((item) => item.id !== target.id)
    );
  }

  function removeAllFromCart() {
    setCartContent([]);
  }

  function decreaseQuantity ({target}) {
      let serialNum = target.attributes.dataserialnumber.value;
      let newState = [...cartContent];
      if(newState[serialNum].quantity > 0) {
        newState[serialNum].quantity -= 1;
      }
      setCartContent(newState);
  }

  function increaseQuantity ({target}) {
    let serialNum = target.attributes.dataserialnumber.value;
    let newState = [...cartContent];
    newState[serialNum].quantity += 1;
    setCartContent(newState);
  }

  return (
    <>
    <Router>
      <Navbar cartContent={cartContent}/>
      <Switch>
        <Route path={"/products/:id"}>
          <ProductGroup
            selectedItem={selectedItem}
            addToCart={addToCart}
          />
        </Route>
        <Route path={"/products"}>
          <ProductTypes/>
        </Route>
        <Route path={"/contact"}>
          <Contact/>
        </Route>
        <Route path={"/cart/summary"}>
          <Summary
            cartContent={cartContent}
            setSubtotal={setSubtotal}
            subtotal={subtotal}
            removeAllFromCart={removeAllFromCart}
          />
        </Route>
        <Route path={"/cart"}>
          <Cart
            cartContent={cartContent}
            deleteFromCart={deleteFromCart}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            removeAllFromCart={removeAllFromCart}
            subtotal={subtotal}
            setSubtotal={setSubtotal}
          />
        </Route>
        <Route path={"/blog/:id"}>
          <BlogArticle/>
        </Route>
        <Route path={"/blog"}>
          <Blog/>
        </Route>
        <Route path={"/"}>
          <Home
            selectedItem={selectedItem}
            addToCart={addToCart}
          />
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}