import { useParams } from "react-router-dom";
import { FaRegLightbulb } from "react-icons/fa";
import img_01 from "../assets/Images/service_01.jpg";
import img_02 from "../assets/Images/service_02.jpg";
import img_03 from "../assets/Images/service_03.jpg";
import img_04 from "../assets/Images/service_04.jpg";
import img_05 from "../assets/Images/service_05.jpg";
import img_06 from "../assets/Images/service_06.jpg";

const services = [
  {
    slug: "electrical-epc-renewable-projects",
    title: "Electrical EPC for Renewable Projects",
    img: img_01,
    description:
      "Our Electrical EPC services for renewable projects ensure sustainability and energy efficiency. From design to execution, we offer a seamless service for wind, solar, and hydropower projects.",
    details:
      "We specialize in providing Electrical EPC services for renewable energy projects, ensuring a reliable power supply while maintaining the highest standards in safety, quality, and efficiency. Our solutions include feasibility studies, design, procurement, construction, and commissioning for wind, solar, and hydropower projects.",
  },
  {
    slug: "electrical-epc-underground-cable-laying",
    title: "Electrical EPC for Underground Cable Laying & Transmission Line",
    img: img_02,
    description:
      "We provide complete solutions for solar energy systems, from design and installation to ongoing maintenance. Our solutions are tailored to maximize energy efficiency for both residential and commercial properties.",
    details:
      "Our solar energy systems are designed to meet the unique needs of our clients. We handle the entire process from initial consultation and design, through to installation and long-term maintenance. Our goal is to provide renewable, cost-effective energy solutions that help you save money while reducing your carbon footprint.",
  },
  {
    slug: "epc-work-substations",
    title: "EPC Work for Substations",
    img: img_03,
    description:
      "Our energy management services help businesses optimize energy usage, improve efficiency, and reduce costs, all while achieving sustainability goals.",
    details:
      "Through a combination of innovative technologies and data-driven insights, we offer comprehensive energy management solutions that help businesses monitor, control, and reduce energy consumption. Our solutions help you manage your energy costs, improve efficiency, and meet sustainability objectives.",
  },
  {
    slug: "industrial-electrification-infrastructure",
    title: "Industrial Electrification & Electrical Infrastructure",
    img: img_04,
    description:
      "We provide comprehensive industrial electrification services, including electrical design, installation, and commissioning for factories, plants, and large-scale industrial operations.",
    details:
      "Our industrial electrification services cover a wide range of applications, from power distribution systems and motor controls to automation and control systems. With extensive experience in high-voltage and low-voltage systems, we ensure seamless integration of electrical systems in industrial environments, helping improve safety and productivity.",
  },
  {
    slug: "project-management-consultancy",
    title: "Project Management & Consultancy for Large-Scale Projects",
    img: img_05,
    description:
      "We offer smart grid solutions that enhance the efficiency, reliability, and sustainability of electrical power grids by integrating advanced technologies like automation, metering, and communication systems.",
    details:
      "Our smart grid solutions are designed to optimize the distribution of electricity, improving both operational efficiency and grid reliability. Through the integration of smart meters, automated systems, and predictive analytics, we help utilities and consumers reduce energy consumption, lower costs, and promote sustainability.",
  },
  {
    slug: "operation-maintenance-substations-renewable",
    title: "Operation & Maintenance of Sub-stations & Renewable Projects",
    img: img_06,
    description:
      "We offer professional electrical maintenance services, ensuring the reliability and efficiency of electrical systems in residential, commercial, and industrial settings.",
    details:
      "Our electrical maintenance services include regular inspections, preventive maintenance, troubleshooting, and repairs. With a focus on safety and minimizing downtime, we help clients maintain the optimal performance of their electrical systems. Our team is equipped with the latest tools and techniques to address a wide range of electrical issues promptly and effectively.",
  },
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((service) => service.slug === slug);

  if (!service) {
    return (
      <p className="text-center text-gray-800 text-xl">Service not found!</p>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="p-10">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Image Section */}
          <div className="relative">
            <img
              src={service.img}
              alt={service.title}
              className="w-full rounded-lg shadow-2xl h-96 object-cover transition-all duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-700 mb-6 tracking-wide sm:text-justify md:text-left">
              {service.description}
            </p>

            <div className="flex items-center space-x-3">
              <FaRegLightbulb className="text-yellow-500 text-2xl" />
              <p className="text-lg text-gray-700">
                We take pride in delivering exceptional results for our clients,
                ensuring project success from start to finish.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Description Section */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-700 sm:text-justify md:text-left">
              {service.details}
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-gray-700 sm:text-justify md:text-left">
              Our approach involves close collaboration with stakeholders,
              ensuring that all requirements are met while adhering to tight
              schedules and budgets. We employ the latest technology and
              methodologies to guarantee the success of each project.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6">
              Key Benefits
            </h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3 sm:text-justify md:text-left">
              <li>Comprehensive design and engineering solutions</li>
              <li>Seamless project execution and management</li>
              <li>High standards of safety and quality assurance</li>
              <li>Post-installation support and maintenance</li>
              <li>Focus on sustainability and energy efficiency</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
