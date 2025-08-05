import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const GetInTouch = () => {
  const [mapRef, mapInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [formRef, formInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section id="get-in-touch" className="w-full py-16 px-4 bg-[#FEFAEF] text-[#472C1B]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Map Section */}
        <motion.div
          ref={mapRef}
          initial={{ x: -100, opacity: 0 }}
          animate={mapInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-[400px] md:h-auto overflow-hidden shadow-lg text-[#472C1B]"
        >
          <iframe
            src="https://maps.google.com/maps?output=embed&q=418%20Amal%20Dr.%20SW%20Atlanta%2C%20GA%2030315&t=m"
            title="Google Map"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Form Section */}
        <motion.div
          ref={formRef}
          initial={{ x: 100, opacity: 0 }}
          animate={formInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center bg-gray-100 p-6"
        >
          <h2 className="text-3xl font-[pop] md:text-4xl font-bold text-[#472C1B] mb-6 text-center md:text-left">
            Get in touch
          </h2>
          <form
            action="https://formspree.io/f/xnnzbzrw" // ← REPLACE this with your real Formspree ID
            method="POST"
            className="space-y-4"
            name="Get in touch FORM"
          >
            {/* Select */}
            <div>
              <label className="block text-sm font-medium mb-1">
                What is your level of interest?
              </label>
              <select
                name="select"
                required
                className="w-full border-b-2 border-gray-300 bg-transparent px-3 py-2 focus:outline-none"
              >
                <option value="Agent">Become a CHANGE agent</option>
                <option value="Champion">Become a champion for CHANGE</option>
                <option value="Partnership">Become a partner/sponsor</option>
                <option value="Volunteer">Sign up to volunteer</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-[#472C1B] mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                required
                className="w-full border-b-2 border-gray-300 bg-transparent px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#472C1B] mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter a valid email address"
                required
                className="w-full border-b-2 border-gray-300 bg-transparent px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-[#472C1B] mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone (e.g. +14155552675)"
                pattern="\+?\d{0,3}[\s\(\-]?([0-9]{2,3})[\s\)\-]?([\s\-]?)([0-9]{3})[\s\-]?([0-9]{2})[\s\-]?([0-9]{2})"
                required
                className="w-full border-b-2 border-gray-300 bg-transparent px-3 py-2 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-[#472C1B] mb-1">
                We are excited about your interest. Please tell us a little more
                about you and your CHANGE goal(s).
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full border-b-2 border-gray-300 bg-transparent px-3 py-2 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="text-left">
              <button
                type="submit"
                className="px-8 py-3 bg-[#F8A443] hover:bg-[#e79435] text-[#472C1B] font-semibold uppercase tracking-wide font-[pop] rounded-md transition"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;
