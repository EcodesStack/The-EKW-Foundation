import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

// Replace these with your actual logo imports
import logo1 from "../assets/ekw-logo.png";
import logo2 from "../assets/kct-logo.png";
import logo3 from "../assets/jamie-logo.png";
import logo4 from "../assets/r2-logo.png";
import logo5 from "../assets/alisa-logo.png";

const Partner = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];
  const marqueeRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(null);
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { threshold: 0.2 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!marqueeRef.current) return;

      const container = marqueeRef.current.getBoundingClientRect();
      const logos = marqueeRef.current.querySelectorAll(".logo");
      let closestIndex = null;
      let closestDistance = Infinity;

      logos.forEach((logo, index) => {
        const rect = logo.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const distance = Math.abs(center - (window.innerWidth / 2));
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCenterIndex(closestIndex);
    }, 100); // Update every 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .marquee-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        .marquee-inner {
          display: flex;
          animation: marqueeScroll 40s linear infinite;
          width: fit-content;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo {
          transition: transform 0.4s ease-in-out;
        }

        .logo.zoomed {
          transform: scale(1.3);
        }
      `}</style>

      <section className="w-full py-20">
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-[pop] md:text-5xl font-bold text-center text-[#472C1B] mb-14"
        >
          Our Partners
        </motion.h2>

        <div className="marquee-container select-none">
          <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none" />

          <div ref={marqueeRef} className="marquee-inner gap-16 px-8">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`partner-logo-${index}`}
                className={`h-20 w-auto object-contain logo ${centerIndex === index ? "zoomed" : ""}`}
                draggable={false}
              />
            ))}
          </div>

          <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none" />
        </div>
      </section>
    </>
  );
};

export default Partner;
