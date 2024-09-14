import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-red-600" : "text-white";
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <footer className="bg-black text-white py-10 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <img src={logo} alt="logo" className="h-28 w-auto" />
            <h2 className="text-lg font-semibold text-center">
              First Volt Power <br /> Services
            </h2>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
            <p className="text-center md:text-xl">
              4th Floor, TP1 Asopalav one west, link road, Sevasi - Canal Rd,
              Vadodara, Gujarat
            </p>
            <p className="text-center md:text-xl">Email: infotech@firstvoltpower.in</p>
            <p className="text-center md:text-xl">Phone: +91-786-196-2973 </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Quick Links</h2>
            <ul className="space-y-2 text-center text-xl">
              <li>
                <Link
                  to="/"
                  className={`${isActive("/")} hover:text-red-600`}
                  onClick={scrollToTop}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={`${isActive("/projects")} hover:text-red-600`}
                  onClick={scrollToTop}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`${isActive("/services")} hover:text-red-600`}
                  onClick={scrollToTop}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`${isActive("/about")} hover:text-red-600`}
                  onClick={scrollToTop}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`${isActive("/contact")} hover:text-red-600`}
                  onClick={scrollToTop}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-bold mb-4 text-center">Follow Us</h2>
            <Link className="flex items-center gap-2 text-xl">
              <FaLinkedin size={28} className="text-blue-500"/>
              Linkedin
            </Link>
            <Link className="flex items-center gap-2 text-xl">
              <FaSquareXTwitter size={28} className="text-white"/>
              Twitter
            </Link><Link className="flex items-center gap-2 text-xl">
              <FaFacebookSquare size={28} className="text-blue-700"/>
              Facbook
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} First volt power. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
