import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "text-red-600" : "text-black";
  };

  return (
    <nav className="p-2 relative z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center font-semibold px-5">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="MultiTech AC Spare Parts"
              className="h-20 md:h-28 w-auto mr-4 object-cover"
            />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 text-xl">
          <Link
            to="/"
            className={`${isActive("/")} hover:text-red-600 hover:scale-105`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`${isActive(
              "/projects"
            )} hover:text-red-600 hover:scale-105`}
          >
            Projects
          </Link>
          <Link
            to="/services"
            className={`${isActive(
              "/services"
            )} hover:text-red-600 hover:scale-105`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`${isActive(
              "/about"
            )} hover:text-red-600 hover:scale-105`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`${isActive(
              "/contact"
            )} hover:text-red-600 hover:scale-105`}
          >
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            type="button"
            className="text-black focus:outline-none z-50"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed -z-50 pt-28 top-0 right-0 h-full w-64 bg-white text-black transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <ul className="flex flex-col space-y-4 text-2xl font-semibold p-4">
          <li>
            <Link
              to="/"
              onClick={toggleNavbar}
              className={`${isActive("/")} hover:text-red-00 block px-3 py-2`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={toggleNavbar}
              className={`${isActive(
                "/projects"
              )} hover:text-red-600 block px-3 py-2`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={toggleNavbar}
              className={`${isActive(
                "/services"
              )} hover:text-red-600 block px-3 py-2`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={toggleNavbar}
              className={`${isActive(
                "/about"
              )} hover:text-red-600 block px-3 py-2`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={toggleNavbar}
              className={`${isActive(
                "/contact"
              )} hover:text-red-600 block px-3 py-2`}
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
