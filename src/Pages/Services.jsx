import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import img_01 from "../assets/Images/service_01.jpg";
import img_02 from "../assets/Images/service_02.webp";
import img_03 from "../assets/Images/service_03.jpg";
import img_04 from "../assets/Images/service_04.jpg";
import img_05 from "../assets/Images/service_05.jpg";
import img_06 from "../assets/Images/service_06.jpg";
import img_07 from "../assets/Images/service_07.jpg";
import img_08 from "../assets/Images/service_08.jpg";
import img_09 from "../assets/Images/service_09.jpg";
import img_10 from "../assets/Images/service_10.webp";

const Services = () => {
  const servicesRef = useRef([]);

  const services = [
    {
      title: "Substation Design & Engineering",
      description:
        "We offer complete substation design services, ensuring efficient power delivery and reliable operation.",
      img: img_01,
    },
    {
      title: "EPC Work for Substations",
      description:
        "We offer substation design and construction services to ensure efficient and reliable power delivery.",
      img: img_02,
    },
    {
      title: "Electrical EPC for Wind Power Projects",
      description:
        "Comprehensive EPC services for wind power projects, ensuring optimal performance and energy efficiency.",
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
    {
      title: "Renewable Energy",
      description:
        "Installation of more than 1200 MW Solar Power Plant across India.",
      img: img_06,
    },
    {
      title: "Plant Electrification",
      description:
        "Turnkey Industrial Electrification of small, Medium and Large Scale Industries & Lesioning with state Utility for HT and LT Power across India.",
      img: img_07,
    },
    {
      title: "Operations and Maintenance for Solar Plants and Substations",
      description:
        "Reliable operations and maintenance services to ensure the long-term performance of solar plants and substations.",
      img: img_08,
    },
    {
      title: "Solar Power Plant Services",
      description:
        "Our Firm is specialized in Supply, Erection, Testing & Commissioning of MW Grid connected Solar Power Plant – AC & DC Side and KW Off Grid / Grid Connected Rooftop Solar System",
      img: img_09,
    },
    {
      title: "EPC Work for Solar Plants",
      description:
        "Complete EPC solutions for solar power plants, from design and engineering to procurement and construction.",
      img: img_10,
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      servicesRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto">
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
              ref={(el) => (servicesRef.current[index] = el)}
              className="bg-white shadow-lg rounded-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={service.img}
                alt={service.title}
                className="mb-4 h-56 w-full p-2"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
