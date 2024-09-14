import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import project_01 from "../assets/Images/project_01.jpg";
import project_02 from "../assets/Images/project_02.jpg";
import project_03 from "../assets/Images/project_03.jpg";
import project_04 from "../assets/Images/project_04.jpg";
import project_05 from "../assets/Images/project_05.jpg";
import project_06 from "../assets/Images/project_06.jpg";
import project_07 from "../assets/Images/project_07.jpg";
import project_08 from "../assets/Images/project_08.jpg";
import project_09 from "../assets/Images/project_09.jpg";
import project_10 from "../assets/Images/project_10.jpg";
import project_11 from "../assets/Images/project_11.jpg";
import project_12 from "../assets/Images/project_12.jpg";
import project_13 from "../assets/Images/project_13.jpg";
import project_14 from "../assets/Images/project_14.jpg";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectRef = useRef(null);

  useEffect(() => {
    const projects = projectRef.current.querySelectorAll(".project-item");

    gsap.fromTo(
      projects,
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "steps(12)",
        scrollTrigger: {
          trigger: projects,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const projectItems = [
    { img: project_01 },
    { img: project_02 },
    { img: project_03 },
    { img: project_04 },
    { img: project_05 },
    { img: project_06 },
    { img: project_07 },
    { img: project_08 },
    { img: project_09 },
    { img: project_10 },
    { img: project_11 },
    { img: project_12 },
    { img: project_13 },
    { img: project_14 },
  ];

  return (
    <div className="flex flex-col min-h-screen mx-auto w-full bg-gray-100">
      <section className="hero py-8 px-2 text-center w-full">
        <h1 className="text-4xl font-bold mb-2">Our Projects</h1>
        <p className="text-lg text-gray-700">Gallery</p>
      </section>

      <section className="container px-4 mx-auto text-center">
        <div
          ref={projectRef}
          className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {projectItems.map((project, index) => (
            <div
              key={index}
              className="project-item shadow-md rounded-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={project.img}
                alt={`project-${index + 1}`}
                className="w-full h-48 object-cover rounded-md cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
