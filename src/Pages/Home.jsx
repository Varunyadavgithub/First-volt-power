import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel_01 from "../assets/Images/carousel_01.jpg";
import carousel_02 from "../assets/Images/carousel_02.jpg";
import carousel_03 from "../assets/Images/carousel_03.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ClientsSection from "../Components/ClientsSection";
import ProjectSection from "../Components/ProjectSection";
import AboutImage from "../assets/Images/AboutImage.jpg";
import ServicesCard from "../Components/ServicesCard";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useGSAP(() => {
    gsap.from(".welcom-text", {
      opacity: 0,
      duration: 2,
      delay: 0.2,
      stagger: 0.4,
    }),
      gsap.fromTo(
        ".services-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".service",
            start: "top 70%",
            end: "bottom top",
          },
        }
      ),
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.1,
          stagger: 0.8,
          scrollTrigger: {
            trigger: ".faq",
            start: "top 70%",
            end: "bottom top",
          },
        }
      );
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <section className="relative">
        <Slider {...settings}>
          <div>
            <img
              src={carousel_01}
              alt="Carousel 1"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <img
              src={carousel_02}
              alt="Carousel 2"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <img
              src={carousel_03}
              alt="Carousel 3"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </Slider>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h1 className="welcom-text text-5xl md:text-6xl font-bold mb-6">
            Welcome to First Volt Power
          </h1>
          <p className="welcom-text text-lg md:text-xl mb-10">
            Powering the future with reliable, sustainable, and innovative
            electrical substation solutions.
          </p>
          <Link
            to="/contact"
            className="welcom-text bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Image Container */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={AboutImage} // Import an appropriate company image
                alt="First Volt Power Services"
                className="w-full h-[500px] object-cover object-center"
              />
            </div>
          </div>

          {/* Text Container */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-10">
              About First Volt Power Services
            </h2>
            <div>
              <p className="text-gray-600 text-justify leading-relaxed mb-6">
                M/s. First Volt Power Services, an{" "}
                <strong>OHSAS 18001:2007 certified company</strong>, is
                dedicated to delivering excellence in the fields of{" "}
                <strong>EPC (Engineering, Procurement & Construction)</strong>.
                With over 8 years of expertise in Renewable Energy and
                Electrical EPC services, we provide end-to-end solutions,
                including substation construction, transmission line
                development, industrial electrification, and comprehensive
                electrical maintenance.
              </p>
              <p className="text-gray-600 text-justify leading-relaxed mb-6">
                Our team of experienced engineers and skilled technicians has
                successfully executed more than{" "}
                <strong>1100 MW of Solar Power Projects</strong> across India,
                with <strong>300 MW currently under construction</strong>. By
                combining energy-efficient engineering practices with timely
                project execution, we generate immense value for our clients and
                contribute to the nation's progress.
              </p>
            </div>
            <div>
              <Link
                to="/about"
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ServicesCard />
      <ClientsSection />
      <ProjectSection />
    </div>
  );
};

export default Home;
