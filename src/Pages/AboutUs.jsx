import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="bg-gray-100 py-10 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                About Us
              </h1>
              <p className="text-lg text-gray-600">
                At <span className="font-semibold">First Volt Power</span>, we
                specialize in delivering top-notch electric substation solutions
                tailored to the energy needs of today and tomorrow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-700">
                  To provide innovative, reliable, and sustainable electrical
                  substation solutions to power communities and industries
                  efficiently.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-700">
                  To become a global leader in energy infrastructure, enhancing
                  power delivery and ensuring a bright future powered by
                  reliable electricity.
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Values
                </h2>
                <ul className="text-gray-700 list-disc pl-5">
                  <li className="mb-2">Innovation</li>
                  <li className="mb-2">Reliability</li>
                  <li className="mb-2">Sustainability</li>
                  <li className="mb-2">Integrity</li>
                  <li className="mb-2">Customer-Centric Approach</li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
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

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Meet Our Leadership Team
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="CEO"
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
                  <p className="text-gray-600">CEO & Founder</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="CTO"
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800">
                    Jane Smith
                  </h3>
                  <p className="text-gray-600">Chief Technical Officer</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="COO"
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800">
                    Michael Johnson
                  </h3>
                  <p className="text-gray-600">Chief Operating Officer</p>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-6">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="CFO"
                    className="w-32 h-32 mx-auto rounded-full mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800">
                    Emily Davis
                  </h3>
                  <p className="text-gray-600">Chief Financial Officer</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8">
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
                  Commitment to sustainability and innovation
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default AboutUs;
