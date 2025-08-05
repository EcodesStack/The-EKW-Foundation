import React from "react";
import { motion } from "framer-motion";

const ratingData = [
  { count: "100", label: "Volunteer (2025 Goal)" },
  { count: "10", label: "Projects (2025 Goal)" },
  { count: "5", label: "Counties (2025 Goal)" },
  { count: "$50K", label: "Donations (2025 Goal)" },
];

const Rating = () => {
  return (
    <section className="w-full bg-[#F9B457] py-20 px-4 text-center" id="rating-section">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl font-bold pb-12 text-[#472C1B] mb- font-[pop]"
        >
          Change happens in time; time after time.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {ratingData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, rotate: 180, scale: 0.5 }}
                whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="w-[149px] h-[149px] flex items-center justify-center bg-[#FEFAEF] border-2 border-white rounded-full shadow-lg"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 3 }}
                  className="text-4xl font-semibold text-[#472C1B]"
                >
                  {item.count}
                </motion.h3>
              </motion.div>

              <motion.h5
                initial={{ opacity: 0, rotateY: 90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="uppercase mt-6 text-sm font-bold tracking-wider text-[#472C1B]"
              >
                {item.label}
              </motion.h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rating;
