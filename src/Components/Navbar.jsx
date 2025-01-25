import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Images/logo.png";
import brochure from "../assets/Brochure.pdf";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const hamburger = useRef();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-red-600" : "text-black";
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  let tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".logo", {
      y: -100,
      delay: 0.1,
      opacity: 0,
    });
    tl.from(".nav-links", {
      y: -100,
      opacity: 0,
      stagger: 0.3,
    });
    gsap.from(hamburger.current, {
      x: 100,
      opacity: 0,
    });
  });

  useGSAP(() => {
    gsap.from(".mob-nav-link", {
      x: 100,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
    });
  }, [isOpen]);

  return (
    <nav className="sticky top-0 p-2 bg-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center font-semibold px-5">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="first volt power"
              className="logo h-20 md:h-28 w-auto mr-4 object-cover"
            />
          </Link>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="hidden md:flex">
            <a
              href={brochure}
              download="FirstVoltPower_Brochure.pdf"
              className="nav-links text-white bg-blue-500 hover:bg-blue-700 p-2 rounded-md"
            >
              Download Brochure
            </a>
          </div>
          <div className="hidden md:flex space-x-6 text-xl">
            <Link
              to="/"
              className={`nav-links ${isActive(
                "/"
              )} hover:text-red-600 hover:scale-105 hover:bg-red-200 p-2 rounded-full`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`nav-links ${isActive(
                "/about"
              )} hover:text-red-600 hover:scale-105 hover:bg-red-200 p-2 rounded-full`}
            >
              About Us
            </Link>
            <Link
              to="/projects"
              className={`nav-links ${isActive(
                "/projects"
              )} hover:text-red-600 hover:scale-105 hover:bg-red-200 p-2 rounded-full`}
            >
              Projects
            </Link>

            {/* Services Dropdown */}
            {/* Services Dropdown */}
            <div
              className="group relative flex items-center" // Added flex and items-center
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Link
                to="/services"
                className={`nav-links ${isActive(
                  "/services"
                )} hover:text-red-600 hover:scale-105 hover:bg-red-200 p-2 rounded-full`}
              >
                Services
              </Link>
            </div>

            <Link
              to="/career"
              className={`nav-links ${isActive(
                "/career"
              )} hover:text-red-600 hover:scale-105 hover:bg-red-200 p-2 rounded-full`}
            >
              Career
            </Link>

            <Link
              to="/contact"
              className={`nav-links ${isActive(
                "/contact"
              )} hover:text-red-600 hover:scale-105 hover:bg-red-200 p-2 rounded-full`}
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <button
            ref={hamburger}
            onClick={toggleNavbar}
            type="button"
            className="text-black focus:outline-none z-50"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed pt-4 top-20 right-0 h-full w-64 bg-white text-black transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <ul className="flex flex-col space-y-4 text-2xl font-semibold p-4">
          <li>
            <Link
              to="/"
              onClick={() => {
                toggleNavbar();
                scrollToTop();
              }}
              className={`mob-nav-link ${isActive(
                "/"
              )} hover:text-red-600 block px-3 py-2`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => {
                toggleNavbar();
                scrollToTop();
              }}
              className={`mob-nav-link ${isActive(
                "/projects"
              )} hover:text-red-600 block px-3 py-2`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={() => {
                toggleNavbar();
                scrollToTop();
              }}
              className={`mob-nav-link ${isActive(
                "/services"
              )} hover:text-red-600 block px-3 py-2`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/career"
              onClick={() => {
                toggleNavbar();
                scrollToTop();
              }}
              className={`mob-nav-link ${isActive(
                "/career"
              )} hover:text-red-600 block px-3 py-2`}
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => {
                toggleNavbar();
                scrollToTop();
              }}
              className={`mob-nav-link ${isActive(
                "/about"
              )} hover:text-red-600 block px-3 py-2`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => {
                toggleNavbar();
                scrollToTop();
              }}
              className={`mob-nav-link ${isActive(
                "/contact"
              )} hover:text-red-600 block px-3 py-2`}
            >
              Contacts
            </Link>
          </li>

          <li>
            <a
              href={brochure}
              download="FirstVoltPower_Brochure.pdf"
              className="nav-links text-sm text-nowrap text-white bg-blue-500 hover:bg-blue-700 p-2 rounded-md"
            >
              Download Brochure
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
