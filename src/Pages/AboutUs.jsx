import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaBullseye,
  FaLightbulb,
  FaHeart,
  FaHistory,
  FaCheckCircle,
} from "react-icons/fa";
import AboutUs_Image from "../assets/Images/aboutus_image.jpg";

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
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img
                src={AboutUs_Image}
                alt="About Us"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                About Us
              </h1>
              <p className="text-lg text-gray-600 text-justify py-4 md:px-10">
                <span className="font-semibold">
                  M/s. First Volt Power Services
                </span>{" "}
                is OHSAS 18001:2007 certified company Emerged with an aim to
                serve the nation utilising our experience & technical skills
                professionally in the fields of EPC (Engineering, Procurement &
                Construction ) We generate immense value for our customer by way
                of latest and emerging energy efficient engineering and
                Execution & completion of exemplary project within given time
                frame.
              </p>
              <p className="text-lg text-gray-600 text-justify py-4 md:px-10">
                <span className="font-semibold">
                  M/s. First Volt Power Services{" "}
                </span>{" "}
                management enriched with more than 8 years of experience in the
                field of Renewable Energy and Electrical EPC services . We offer
                to our valued customers complete solution from concept to
                commissioning of Sub-stations , Transmission Line, Distribution
                Network, Industrial Electrification, Cabling work and plant
                related Electrical projects which includes Installation &
                Commissioning of Power transformers, HT/LT Panels, HT/LT Power &
                Control Cable Laying and Termination, HT Cable Straight through
                joints, Street & Area Lighting, Earthing works and Electrical
                testing ,Maintenance & Shutdown Work, etc.
              </p>
              <p className="text-lg text-gray-600 text-justify py-4 md:px-10">
                <span className="font-semibold">
                  Further, In the field of Renewable Energy{" "}
                </span>{" "}
                M/s. First Volt Power Services has executed more than 1100 MW
                Solar Power Projects and more than 300 MW under Construction at
                different locations across India with our team of Experienced
                and quality conscious Engineers and skilled Technicians.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div ref={missionRef} className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="flex gap-2 text-2xl font-bold text-gray-800 mb-4">
                <FaBullseye className="text-4xl text-blue-600 mb-4" />
                Our Mission
              </h2>
              <p className="text-gray-700">
                We acknowledge work ethics in highest possible nature to be
                productive and pro-active in the projects and to be accountable
                for all work undertaken by First Volt Power Services. We take
                pride that We ensure and assure the quality that speaks for
                itself without compromising safety.
              </p>
            </div>
            <div ref={visionRef} className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="flex gap-2 text-2xl font-bold text-gray-800 mb-4">
                <FaLightbulb className="text-4xl text-yellow-600 mb-4" />
                Our Vision
              </h2>
              <p className="text-gray-700">
                To become one of the global leaders in Energy infrastructure,
                Enhancing Power generation & Distribution and ensuring bright
                future powered by efficient electricity generation.
              </p>
            </div>
            <div ref={valuesRef} className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="flex gap-2 text-2xl font-bold text-gray-800 mb-4">
                <FaHeart className="text-4xl text-red-600 mb-4" />
                Our Values
              </h2>
              <p>
                Our values lead us on the path we work with our business
                partners, within our communities, and with each other. We have
                created a company culture where ideas can blossom, people can
                thrive, and success can flourish.s
              </p>
            </div>
          </div>

          <div
            ref={storyRef}
            className="bg-white shadow-lg rounded-lg p-8 mb-12"
          >
            <h2 className="flex gap-2 text-2xl font-bold text-gray-800 mb-6">
              <FaHistory className="text-4xl text-green-600 mb-4" />
              Our Story
            </h2>
            <p className="text-gray-700 mb-4">
              First Volt Power was established in 2017 with a vision to
              revolutionize Power infrastructure in the industry. Since almost a
              decade, we have successfully completed numerous projects across
              different sectors, earned reputation for excellence and
              trustworthiness.
            </p>
            <p className="text-gray-700">
              Our commitment to quality and innovation has allowed us to serve
              some of the largest energy companies and industries in the region.
              Today, we continue to expand our reach and enhance our
              capabilities to meet the growing demands of the energy sector.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8 why-choose-us">
            <h2 className="flex gap-2 text-2xl font-bold text-gray-800 mb-6">
              <FaCheckCircle className="text-4xl text-teal-600 mb-4" />
              Why Choose First Volt Power?
            </h2>
            <ul className="list-disc text-gray-700 pl-5">
              <li className="mb-2">Over 08 years of industry experience.</li>
              <li className="mb-2">
                Proven track record of successful and on time projects.
              </li>
              <li className="mb-2">A team of highly skilled professionals.</li>
              <li className="mb-2">Customer-focused and results-driven.</li>
              <li className="mb-2">
                Commitment to innovation and sustainability.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
