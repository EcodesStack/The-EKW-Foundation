import React from "react";
import helpImg from "../assets/help1.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const YoungPeople = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const floatLeft = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    hidden: { opacity: 0, x: -100, transition: { duration: 0.8, ease: "easeIn" } },
  };

  const floatRight = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } },
    hidden: { opacity: 0, x: 100, transition: { duration: 0.8, ease: "easeIn" } },
  };

  return (
    <div ref={ref} className="bg-[#FEFAEF] py-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto translate-x-[10px] md:translate-x-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            variants={floatLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-10"
          >
            <h1 className="text-3xl md:text-5xl font-[pop] pb-8 px-12 md:px-0 font-bold text-[#472C1B] text-center md:text-left">
              Cultivating with and for our Young People
            </h1>

            <div className="flex flex-wrap gap-6 px-18 sm:px-18 md:px-0">
              {[
                {
                  title: "Fresh Food",
                  desc: "Community gardens provide access to nutritious produce.",
                },
                {
                  title: "Physical Activity",
                  desc: "Provides an outlet promoting outdoor fun and reasonable impact.",
                },
                {
                  title: "Community",
                  desc: "Helps young people feel connected and valued in their communities.",
                },
                {
                  title: "Social Growth",
                  desc: "Encourages teamwork and social interaction through shared spaces.",
                },
              ].map((item, idx) => (
                <div className="w-full sm:w-[48%]" key={idx}>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#472C1B] pb-2">
                    {item.title}
                  </h3>
                  <hr className="my-2 border-[#F8A443]" />
                  <p className="text-sm sm:text-lg text-[#5E4B3C] leading-relaxed pt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={floatRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex justify-center"
          >
            <img
              src={helpImg}
              alt="Young people helping"
              className="w-[75%] max-w-lg h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default YoungPeople;
