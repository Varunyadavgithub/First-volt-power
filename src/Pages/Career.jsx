import React, { useState } from "react";
import Career_Image from "../assets/images/Career_Image.jpg";

function Career() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., sending data to a server)
    alert("Your application has been submitted!");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left side with image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 md:flex-1">
          <div className="h-[500px] w-full overflow-hidden rounded-lg shadow-lg">
            <img
              src={Career_Image}
              alt="Career Banner"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 max-w-xl mx-auto flex-1">
          <div className="bg-white p-10 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Submit your details and resume to apply for a position with us. We're excited to hear from you!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="(+91) 00000-00000"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                />
              </div>

              {/* Cover Letter */}
              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Cover Letter (Optional)
                </label>
                <textarea
                  id="coverLetter"
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="5"
                  placeholder="Tell us more about yourself, your experience, and why you're interested in joining our team..."
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResume(e.target.files[0])}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-blue-700 hover:file:bg-blue-100"
                  required
                />
                {resume && (
                  <p className="text-sm text-gray-500 mt-2">
                    Selected file: {resume.name}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 mt-4 flex items-center justify-center"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;