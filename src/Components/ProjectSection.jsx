import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project_01 from "../assets/Images/project_01.jpg";
import project_02 from "../assets/Images/project_02.jpg";
import project_03 from "../assets/Images/project_03.jpg";
import project_04 from "../assets/Images/project_04.jpg";
import project_05 from "../assets/Images/project_05.jpg";
import project_06 from "../assets/Images/project_06.jpg";
import { Link } from "react-router-dom";

const projects = [
  { name: "Project 1", img: project_01 },
  { name: "Project 2", img: project_02 },
  { name: "Project 3", img: project_03 },
  { name: "Project 4", img: project_04 },
  { name: "Project 5", img: project_05 },
  { name: "Project 6", img: project_06 },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ProjectSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Projects</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Explore the remarkable projects we’ve successfully completed across
          various industries, showcasing our commitment to excellence in every
          detail.
        </p>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="p-4 flex justify-center items-center">
              <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transform transition-all duration-500 hover:scale-105">
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </Slider>

        <div className="mt-8">
          <Link
            to="/projects"
            onClick={scrollToTop}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-transform duration-300 transform hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
