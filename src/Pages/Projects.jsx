import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projectItems } from "../assets/assets";

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

  return (
    <div className="flex flex-col min-h-screen mx-auto py-4 w-full bg-gray-100">
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
