import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
