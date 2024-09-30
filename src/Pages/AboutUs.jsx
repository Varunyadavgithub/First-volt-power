import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutus_img from "../assets/Images/aboutus_img.jpg";
import { FaBullseye, FaEye, FaHandshake } from "react-icons/fa";
import Founder_And_CEO from "../assets/Images/Founder_&_CEO.jpg";
import Chief_Technical_Officer from "../assets/Images/Chief_Technical_Officer.jpg";
import Chief_Operating_Officer from "../assets/Images/Chief_Operating_Officer.jpg";
import Chief_Financial_Officer from "../assets/Images/Chief_Financial_Officer.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
  const storyRef = useRef(null);
  const leadershipRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: missionRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(missionRef.current, { opacity: 1, y: 0, duration: 1 });
        gsap.to(visionRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
        });
        gsap.to(valuesRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.6,
        });
      },
    });

    ScrollTrigger.create({
      trigger: storyRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(storyRef.current, { opacity: 1, y: 0, duration: 1 });
      },
    });

    ScrollTrigger.create({
      trigger: leadershipRef.current,
      start: "top 80%",
      onEnter: () => {
        gsap.to(leadershipRef.current, { opacity: 1, y: 0, duration: 1 });
      },
    });

    ScrollTrigger.create({
      trigger: ".why-choose-us",
      start: "top 80%",
      onEnter: () => {
        gsap.to(".why-choose-us", { opacity: 1, y: 0, duration: 1 });
      },
    });

    gsap.set(
      [
        missionRef.current,
        visionRef.current,
        valuesRef.current,
        storyRef.current,
        leadershipRef.current,
        ".why-choose-us",
      ],
      {
        opacity: 0,
        y: 100,
      }
    );
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 py-10 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            About Us
          </h1>
          <div className="flex flex-col md:flex-row mb-12">
            <div className="flex items-center justify-center w-full md:w-1/2 mb-4 md:mb-0">
              <img
                src={aboutus_img}
                alt="aboutus-img"
                className="object-cover rounded-md w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-lg text-gray-600 text-justify py-4 md:px-10">
                <span className="font-semibold">
                  M/s. First Volt Power Services
                </span>{" "}
                is an OHSAS 18001:2007 certified company which constructors with
                an aim to serve the nation professionally in the fields of EPC
                (Engineering, Procurement & Construction ). We are committed to
                our quality and safety policies. We generate immense value for
                customer in terms of innovative and energy efficient engineering
                & On-time completion and exemplary project execution.
              </p>
              <p className="text-lg text-gray-600 text-justify py-4 md:px-10">
                <span className="font-semibold">
                  M/s. First Volt Power Services
                </span>{" "}
                management enriched with more than 20 years of experience in the
                field of electrical services & Manufacturing. We offer to our
                valued customers complete solution from concept to commissioning
                of Sub-stations, Transmission Line, Distribution, Industrial
                Electrification, Cabling work and Balance of plant related
                project which includes Erection of Power transformers, HT/LT
                Panels, HT/LT Power & Control Cable Laying and Termination, HT
                Cable Straight through joints, Street & Area Lighting, Earthing
                works and Electrical Maintenance & Shutdown Work, testing and
                commissioning etc.
              </p>
              <p className="text-lg text-gray-600 text-justify py-4 md:px-10">
                <span className="font-semibold">
                  Further, In the field of Renewable Energy
                </span>{" "}
                M/s. First Volt Power Services has executed more than 1000 MW
                Solar Power Plant across India with our highly skilled and
                motivated team and more than 200 MW under Construction across
                India.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div ref={missionRef} className="bg-white shadow-lg rounded-lg p-8">
              <div className="flex items-center mb-4">
                <FaBullseye className="text-3xl text-red-500 mr-3" />{" "}
                <h2 className="text-2xl font-bold text-gray-800">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-700">
                We regard our work ethics in highest nature, to be productive
                and pro-active in our projects to be accountable for all work
                undertaken by First Volt Power Services. We pride ourselves in
                quality that speaks for itself without compromising safety and
                reliability. We respect that each project deserves our attention
                to detail attitude.
              </p>
            </div>

            <div ref={visionRef} className="bg-white shadow-lg rounded-lg p-8">
              <div className="flex items-center mb-4">
                <FaEye className="text-3xl text-blue-500 mr-3" />{" "}
                <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-700">
                To become a global leader in energy infrastructure, enhancing
                power delivery and ensuring a bright future powered by reliable
                electricity.
              </p>
            </div>

            <div ref={valuesRef} className="bg-white shadow-lg rounded-lg p-8">
              <div className="flex items-center mb-4">
                <FaHandshake className="text-3xl text-green-500 mr-3" />{" "}
                <h2 className="text-2xl font-bold text-gray-800">Our Values</h2>
              </div>
              <p className="text-gray-700">
                Our values guide the way we work with our business partners,
                within our communities, and with each other. Through our values,
                we have created a company culture where ideas can blossom,
                people can thrive, and success can flourish.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 mb-4">
            <div
              ref={storyRef}
              className="bg-white shadow-lg rounded-lg p-8 mb-12 w-full md:w-1/2"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                First Volt Power was established in 2005 with a vision to
                revolutionize power infrastructure in the industry. Over the
                past decades, we have successfully completed numerous projects
                across different sectors, earning a reputation for excellence
                and trustworthiness.
              </p>
              <p className="text-gray-700">
                Our commitment to quality and innovation has allowed us to serve
                some of the largest energy companies and industries in the
                region. Today, we continue to expand our reach and enhance our
                capabilities to meet the growing demands of the energy sector.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8 h-fit w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Why Choose First Volt Power?
              </h2>
              <ul className="list-disc text-gray-700 pl-5">
                <li className="mb-2">Over 15 years of industry experience</li>
                <li className="mb-2">
                  Proven track record of successful projects
                </li>
                <li className="mb-2">A team of highly skilled professionals</li>
                <li className="mb-2">Customer-focused and results-driven</li>
                <li className="mb-2">
                  Commitment to innovation and sustainability
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Meet Our Leadership Team
            </h2>
            <div
              ref={leadershipRef}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img
                  src={Founder_And_CEO}
                  alt="CEO"
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img
                  src={Chief_Technical_Officer}
                  alt="CTO"
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
                <p className="text-gray-600">Chief Technical Officer</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img
                  src={Chief_Operating_Officer}
                  alt="COO"
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  Michael Johnson
                </h3>
                <p className="text-gray-600">Chief Operating Officer</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <img
                  src={Chief_Financial_Officer}
                  alt="CFO"
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800">Emily Davis</h3>
                <p className="text-gray-600">Chief Financial Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
