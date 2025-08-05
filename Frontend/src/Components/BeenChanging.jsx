import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BeenChanging = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={inView ? { rotateX: 0, opacity: 1 } : { rotateX: 90, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformOrigin: "top center" }}
        className="w-full bg-[#F9B457] text-[#472C1B] text-center py-28 pb-60 mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-[pop]">Been Caught Changing?</h2>
      </motion.div>
    </div>
  );
};

export default BeenChanging;
