import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import img_01 from "../assets/Images/service_01.jpg";
import img_02 from "../assets/Images/service_02.webp";
import img_03 from "../assets/Images/service_03.jpg";
import img_04 from "../assets/Images/service_04.jpg";
import img_05 from "../assets/Images/service_05.jpg";
import img_06 from "../assets/Images/service_06.jpg";

import { Link } from "react-router-dom";

const Services = () => {
  const servicesRef = useRef([]);

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
            <Link to={`/services/${service.slug}`} key={service.slug}>
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
