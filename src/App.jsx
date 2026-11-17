import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function NavBar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link className="brand" to="/">
        Paradise Nursery
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/about">About Us</Link>
        <Link to="/cart">Cart ({totalQuantity})</Link>
      </div>
    </nav>
  );
}

function LandingPage() {
  return (
    <section className="landing">
      <h1>Paradise Nursery</h1>
      <p>
        Bring a little greenery home. Paradise Nursery hand-picks air purifying
        houseplants that thrive indoors and make every room feel alive.
      </p>
      <Link className="get-started" to="/plants">
        Get Started
      </Link>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
    </div>
  );
}
