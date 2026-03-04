import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden"
    >
      {/* Optional background shapes/particles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply opacity-20 animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply opacity-20 animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative z-10">
       {/* Heading */}
<div className="text-center mb-20 relative">
  {/* Main Heading */}
  <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block
                 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                 animate-gradient-x">
    <span className="mr-2 inline-block transform transition-transform duration-500 hover:scale-105">
      Get in
    </span>
    <span className="text-gray-800 relative inline-block">
      Touch
      {/* Underline Accent */}
      <span className="absolute left-0 -bottom-2 w-full h-1 bg-indigo-600 rounded-full animate-pulse"></span>
    </span>
  </h2>

  {/* Description */}
  <p className="text-gray-500 max-w-2xl mx-auto text-lg mt-4">
    Have a project or query? Let's collaborate and create something amazing.
  </p>
</div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Form - Glass Card */}
          <div className="flex-1 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10 transition-transform hover:scale-105 duration-500">
            <form className="space-y-6">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  required
                />
                <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-0.75rem] peer-focus:text-indigo-500 peer-focus:text-sm">
                  Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder=" "
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  required
                />
                <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-0.75rem] peer-focus:text-indigo-500 peer-focus:text-sm">
                  Email
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  rows="5"
                  placeholder=" "
                  className="peer w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
                  required
                ></textarea>
                <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-0.75rem] peer-focus:text-indigo-500 peer-focus:text-sm">
                  Message
                </label>
              </div>

              {/* Submit Button */}
              <button className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map - Glass Card */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Info */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 transition-transform hover:scale-105 duration-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Contact Info
              </h3>
              <p className="text-gray-600 mb-2">📍 123 PCMC, Pune, India</p>
              <p className="text-gray-600 mb-2">📞 +91 7972628662</p>
              <p className="text-gray-600 mb-2">✉️ vishaldeshmukh7972@gmail.com</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">
                  LinkedIn
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">
                  GitHub
                </a>
                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">
                  Instagram
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden h-64 md:h-full">
              <iframe
                title="Location Map"
                src="https://maps.google.com/maps?q=Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 rounded-3xl"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;