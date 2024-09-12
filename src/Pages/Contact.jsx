import React from "react";

const Contact = () => {
  return (
    <>
       <div className="bg-gray-100 py-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">We'd love to hear from you. Get in touch with us today!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Information</h2>
            <p className="text-gray-700 mb-4 text-center">
              <strong>First Volt Power</strong>
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Address:</span>4th Floor, TP1 Asopalav one west, link road, Sevasi - Canal Rd, Vadodara, Gujarat</p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Phone:</span>  +91-786-196-2973
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Email:</span> infotech@firstvoltpower.com
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Business Hours:</span> Mon - Fri, 9 AM - 5 PM
            </p>

            <div className="mt-6">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096065!2d144.9537353153228!3d-37.81720997975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f48e4d97%3A0x5045675218ce7e0!2sElectric%20Avenue!5e0!3m2!1sen!2sus!4v1631101673745!5m2!1sen!2sus"
                className="w-full h-64 rounded-lg border-0 shadow-md"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
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
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
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
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
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
