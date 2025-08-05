import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImg from "../assets/we-help.jpg";

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // If scroll passes half the hero height, show buttons
      setShowButtons(scrollY > windowHeight * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      style={{ backgroundImage: `url(${heroImg})` }}
      className="px-16 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-cover bg-no-repeat min-h-screen"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FEFAEF] opacity-80 z-0"></div>

      <AnimatePresence>
        {inView && (
          <>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-center mb-6 text-[#472C1B] z-10 relative mt-20"
            >
              <h1 className="text-5xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold font-[pop] leading-[1.2] px-6 sm:px-0">
                Be the Change <br className="md:hidden" /> You Want to See
              </h1>
              <h3 className="mt-6 max-w-xl m-auto text-[#5E4B3C] text-base sm:text-lg lg:text-xl font-[pop] leading-relaxed px-6 sm:px-0">
                Join hands with{" "}
                <strong className="text-[#F8A443]">E.K.W Foundation</strong> in
                making a lasting difference through{" "}
                <strong>compassion</strong>, <em>empowerment</em>, and{" "}
                <strong>service</strong> to communities in need.
              </h3>
            </motion.div>

            {/* Buttons */}
            <AnimatePresence>
              {showButtons && (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs max-sm:flex-col max-sm:items-center relative z-10 leading-relaxed mt-10"
                >
                  <a
                    href="#our-vision"
                    className="bg-[#F8A443] text-[#FEFAEF] font-semibold px-10 py-2.5 rounded-md hover:bg-[#e79435] hover:scale-105 active:scale-95 transition uppercase font-[pop]"
                  >
                    Our Vision
                  </a>

                  <a
                    href="https://www.zeffy.com/embed/donation-form/ebf32fba-adf8-4579-96c2-76afd45abf83?modal=true"
                    className="border border-[#472C1B] text-[#472C1B] font-semibold px-10 py-2.5 rounded-md hover:bg-[#472C1B] hover:text-white hover:scale-105 active:scale-95 transition uppercase font-[pop]"
                  >
                    Donate Now
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
