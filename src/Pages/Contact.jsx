import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const leftElement = leftRef.current;
    const rightElement = rightRef.current;

    gsap.fromTo(
      leftElement,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftElement,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      rightElement,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightElement,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen mx-auto w-full bg-gray-100 py-10 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              We'd love to hear from you. Get in touch with us today!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div ref={leftRef} className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-4 text-center">
                <strong>First Volt Power</strong>
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Address:</span> 403 & 404,
                Asopalav ,one west on Priya talkies, Sewasi link road, Nr.
                Bharat petrol pump, Vadodara-391101, Gujarat.
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Phone:</span> +91-760-088-5247
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:firstvoltpower@gmail.com"
                  className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer"
                >
                  firstvoltpower@gmail.com
                </a>
                {" "}&{" "}
                <a
                  href="mailto:purchase.firstvoltpower@gmail.com"
                  className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer"
                >
                  purchase.firstvoltpower@gmail.com
                </a>
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Business Hours:</span> Mon -
                Fri, 9 AM - 5 PM
              </p>

              <div className="mt-6">
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1900021915885!2d73.12111377529277!3d22.30865287968061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcfc2de2e608b%3A0x33e6b1e4a02ab2e7!2sFirst%20Volt%20Power%20Services!5e0!3m2!1sen!2sin!4v1726217392733!5m2!1sen!2sin"
                  className="w-full h-64 rounded-lg border-0 shadow-md"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div ref={rightRef} className="bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Send Us a Message
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-semibold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-500 transition duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
