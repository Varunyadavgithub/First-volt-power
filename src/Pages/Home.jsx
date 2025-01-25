import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel_01 from "../assets/Images/carousel_01.jpg";
import carousel_02 from "../assets/Images/carousel_02.jpg";
import carousel_03 from "../assets/Images/carousel_03.jpg";
import img_01 from "../assets/Images/service_01.jpg";
import img_02 from "../assets/Images/service_02.webp";
import img_03 from "../assets/Images/service_03.jpg";
import img_04 from "../assets/Images/service_04.jpg";
import img_05 from "../assets/Images/service_05.jpg";
import img_06 from "../assets/Images/service_06.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ClientsSection from "../Components/ClientsSection";
import ProjectSection from "../Components/ProjectSection";
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

  const services = [
    {
      slug: "electrical-epc-renewable-projects",
      title: "Electrical EPC for Renewable Projects",
      img: img_01,
    },
    {
      slug: "electrical-epc-underground-cable-laying",
      title: "Electrical EPC for Underground Cable Laying & Transmission Line",
      img: img_02,
    },
    {
      slug: "epc-work-substations",
      title: "EPC Work for Substations",
      img: img_03,
    },
    {
      slug: "industrial-electrification-infrastructure",
      title: "Industrial Electrification & Electrical Infrastructure",
      img: img_04,
    },
    {
      slug: "project-management-consultancy",
      title: "Project Management & Consultancy for Large-Scale Projects",
      img: img_05,
    },
    {
      slug: "operation-maintenance-substations-renewable",
      title: "Operation & Maintenance of Sub-stations & Renewable Projects",
      img: img_06,
    },
  ];

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
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
            About First Volt Power Services
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 text-justify leading-relaxed mb-6">
              M/s. First Volt Power Services, an{" "}
              <strong>OHSAS 18001:2007 certified company</strong>, is dedicated
              to delivering excellence in the fields of{" "}
              <strong>EPC (Engineering, Procurement & Construction)</strong>.
              With over 8 years of expertise in Renewable Energy and Electrical
              EPC services, we provide end-to-end solutions, including
              substation construction, transmission line development, industrial
              electrification, and comprehensive electrical maintenance.
            </p>
            <p className="text-gray-600 text-justify leading-relaxed mb-6">
              Our team of experienced engineers and skilled technicians has
              successfully executed more than{" "}
              <strong>1100 MW of Solar Power Projects</strong> across India,
              with <strong>300 MW currently under construction</strong>. By
              combining energy-efficient engineering practices with timely
              project execution, we generate immense value for our clients and
              contribute to the nation’s progress.
            </p>
          </div>
          <div className="text-center">
            <Link
              to="/about"
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="service py-16 px-4 bg-gradient-to-r from-blue-50 to-gray-100">
        <div className="container mx-auto text-center">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mx-auto">
              At <span className="font-semibold">First Volt Power</span>, we
              provide a comprehensive range of services to support all your
              electrical substation needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link to={`/services/${service.slug}`} key={service.slug}>
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-pointer relative overflow-hidden"
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="mb-4 h-56 w-full rounded-t-lg object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/services"
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg shadow-lg transition-all hover:shadow-xl"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <ClientsSection />
      <ProjectSection />
    </div>
  );
};

export default Home;
