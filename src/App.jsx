import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import ServiceDetail from "./Pages/ServiceDetail";
import Career from "./Pages/Career";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import FloatingContactIcons from "./Components/FloatingContactIcons";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <FloatingContactIcons />
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
