import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel_01 from "../assets/Images/carousel_01.jpg";
import carousel_02 from "../assets/Images/carousel_02.jpg";
import carousel_03 from "../assets/Images/carousel_03.jpg";
import img_01 from "../assets/Images/service_01.jpg";
import img_02 from "../assets/Images/service_02.jpg";
import img_03 from "../assets/Images/service_03.jpg";
import img_04 from "../assets/Images/service_04.jpg";
import img_05 from "../assets/Images/service_05.jpg";

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
      title: "Substation Design & Engineering",
      description:
        "We offer complete substation design services, ensuring efficient power delivery and reliable operation.",
      img: img_01,
    },
    {
      title: "Installation & Maintenance",
      description:
        "Expert installation and maintenance services to ensure long-lasting performance of your substation equipment.",
      img: img_02,
    },
    {
      title: "Electrical Testing & Commissioning",
      description:
        "Our testing and commissioning services ensure that all systems are operating optimally and meet regulatory standards.",
      img: img_03,
    },
    {
      title: "Power System Upgrades",
      description:
        "We offer upgrades and modernizations for existing substations to improve efficiency and handle increased loads.",
      img: img_04,
    },
    {
      title: "Emergency Repairs & Troubleshooting",
      description:
        "Our rapid-response team is available 24/7 for emergency repairs, ensuring your operations continue with minimal downtime.",
      img: img_05,
    },
  ];

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
          <h1 className="text-5xl font-bold mb-6">
            Welcome to First Volt Power
          </h1>
          <p className="text-lg mb-10">
            Powering the future with reliable, sustainable, and innovative
            electrical substation solutions.
          </p>
          <Link
            to="/contact"
            className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            About First Volt Power
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            First Volt Power is committed to delivering high-quality substation
            solutions that meet the energy demands of modern industries and
            communities. With over 15 years of experience, we bring innovative
            designs, expert installation, and world-class maintenance to every
            project.
          </p>
          <Link
            to="/about"
            className="bg-blue-900 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold text-lg"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-200">
        <div className="container mx-auto text-center">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h1>
            <p className="text-lg text-gray-600">
              At <span className="font-semibold">First Volt Power</span>, we
              provide a comprehensive range of services to support all your
              electrical substation needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="mb-4 h-56 w-full rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/services"
              className="bg-blue-900 hover:bg-blue-800 text-white py-3 px-6 rounded-lg font-semibold text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-6 mb-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                What services do you offer?
              </h3>
              <p className="text-gray-700">
                We offer a range of services including substation design,
                installation, maintenance, testing, and emergency repairs.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 mb-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                How can I request a quote?
              </h3>
              <p className="text-gray-700">
                You can request a quote by contacting us through our website or
                calling our office directly.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 mb-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                What is your service area?
              </h3>
              <p className="text-gray-700">
                We provide services across a wide region. Please contact us to
                check if we cover your specific area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-red-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Power Your Future?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our team today to discuss your project and find
            out how we can help you with reliable and innovative substation
            solutions.
          </p>
          <Link
            to="/contact"
            className="bg-white text-black hover:text-blue-600 py-3 px-6 rounded-lg font-semibold text-lg"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
