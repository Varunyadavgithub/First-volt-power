import React, { useState } from "react";
import {
  FaSolarPanel,
  FaIndustry,
  FaLightbulb,
  FaCheckCircle,
  FaEnvelope,
} from "react-icons/fa";
import Career_Banner from "../assets/images/Career_Banner.webp";

function Career() {
  const [activeJob, setActiveJob] = useState(null);

  const jobOpenings = [
    {
      title: "Solar Project Engineer",
      location: "Pan India",
      type: "Full-time",
      description:
        "Join our team of experienced engineers in executing solar power projects across India.",
      requirements: [
        "B.E/B.Tech in Electrical/Mechanical Engineering",
        "2-5 years of experience in Solar EPC projects",
        "Strong understanding of solar plant design and implementation",
        "Knowledge of electrical systems and grid integration",
      ],
      responsibilities: [
        "Manage solar project execution",
        "Coordinate with site teams and vendors",
        "Ensure quality and timely project completion",
        "Technical documentation and reporting",
      ],
    },
    {
      title: "Electrical EPC Specialist",
      location: "Bangalore",
      type: "Full-time",
      description:
        "Opportunity to work on critical electrical infrastructure and transmission projects.",
      requirements: [
        "B.E/B.Tech in Electrical Engineering",
        "3-6 years of experience in Electrical EPC services",
        "Expertise in substation, transmission line, and distribution network projects",
        "Strong project management skills",
      ],
      responsibilities: [
        "Design and plan electrical infrastructure projects",
        "Manage project procurement and construction",
        "Ensure compliance with safety and quality standards",
        "Client coordination and project reporting",
      ],
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${Career_Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Build Your Career in Renewable Energy
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join First Volt Power Services - A Leader in Electrical EPC and
            Solar Power Solutions
          </p>
        </div>
      </div>

      {/* Why Join Us Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose First Volt Power Services?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaSolarPanel className="text-5xl text-blue-600" />,
              title: "Industry Leader",
              description: "Over 1100 MW Solar Power Projects Completed",
            },
            {
              icon: <FaIndustry className="text-5xl text-green-600" />,
              title: "Comprehensive EPC",
              description:
                "End-to-end solutions in Electrical and Renewable Energy",
            },
            {
              icon: <FaLightbulb className="text-5xl text-red-600" />,
              title: "Innovation",
              description:
                "8+ Years of Experience in Cutting-Edge Energy Solutions",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center hover:transform hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Openings */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Current Openings
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:shadow-xl transition-shadow"
                onClick={() => setActiveJob(activeJob === index ? null : index)}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold">{job.title}</h3>
                  <span className="text-green-600 font-medium">{job.type}</span>
                </div>
                <p className="text-gray-600 mb-4">{job.location}</p>
                <p className="mb-4">{job.description}</p>

                {activeJob === index && (
                  <div className="mt-4">
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-center">
                            <FaCheckCircle className="mr-2 text-green-500" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-center">
                            <FaCheckCircle className="mr-2 text-blue-500" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
        <p className="text-xl mb-6">
          Send your resume and showcase your passion for renewable energy and
          electrical infrastructure.
        </p>
        <div className="flex justify-center items-center">
          <FaEnvelope className="text-3xl mr-4" />
          <a
            href="mailto:careers@firstvoltpower.com"
            className="text-xl font-semibold hover:underline"
          >
            careers@firstvoltpower.com
          </a>
        </div>
      </section>
    </div>
  );
}

export default Career;
