import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurVision = () => {
  const sectionRef = useRef(null);
  const [inViewRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const leftParentVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const leftChildVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 1 },
    },
  };

  return (
    <section
      id="our-vision"
      ref={sectionRef}
      className="py-20 px-10 sm:px-10 md:px-16 bg-[#FEFAEF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-12">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          ref={inViewRef}
        >
          {/* Left Column */}
          <motion.div
            variants={leftParentVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h2
              variants={leftChildVariants}
              className="text-3xl md:text-4xl font-bold text-[#472C1B] leading-relaxed"
            >
              Our vision and strategy
            </motion.h2>

            <motion.p
              variants={leftChildVariants}
              className="text-[#5E4B3C] text-lg leading-relaxed max-w-[90%] md:max-w-[70%]"
            >
              To see the youth of today become the visionaries of tomorrow;
              growing in hope, and believing they can make their dreams become reality.
            </motion.p>

            <motion.a
              variants={leftChildVariants}
              href="#volunteer"
              className="inline-block bg-[#F8A443] text-white font-semibold px-8 py-2.5 text-lg rounded-md hover:bg-[#e89837] transition"
            >
              Learn more
            </motion.a>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-[#F7F3E9] p-6 md:p-8 md:px-12 rounded-md"
          >
            <ul className="space-y-6 text-xl leading-relaxed text-[#472C1B]">
              <li className="flex items-start">
                <FaArrowRight className="text-[#F8A443] mr-4 text-3xl" />
                Expose youth to life beyond current limitations.
              </li>
              <li className="flex items-start">
                <FaArrowRight className="text-[#F8A443] mr-4 text-3xl" />
                Create experiences that promote expertise.
              </li>
              <li className="flex items-start">
                <FaArrowRight className="text-[#F8A443] mr-4 text-3xl" />
                Prepare them to succeed through planning and discipline.
              </li>
              <li className="flex items-start">
                <FaArrowRight className="text-[#F8A443] mr-4 text-3xl" />
                Grow their mentality, money management, and maturity.
              </li>
              <li className="flex items-start">
                <FaArrowRight className="text-[#F8A443] mr-4 text-3xl" />
                Help them become someone who C.A.R.E.S. about the future.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
