import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Images
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";

const teamMembers = [
  {
    title: "President / CEO",
    name: "Kent Creer-Williams",
    image: team3,
    desc: "With professional experience in HR, IT, Org Development, Pastoral Counseling, and Graphic Design, Kent brings a wealth of expertise.",
    delay: 0.2,
  },
  {
    title: "COO / Vice President",
    name: "Julius L. Ford",
    image: team4,
    desc: "Julius L. Ford is an innovative and influential change agent, committed to helping others visualize and realize their greatest and fullest potential--essentially, their best selves. Professionally, he has excelled in the human resources and technology spaces for nearly three decades; having forged working relationships with Fortune 500 companies like IBM, Lafarge North America (now Holcolmb-Lafarge). More recently, he has been an individual contributor as a technical resource for Beazer Homes and SCA Health. Julius is passionate about people. This passion has led him to a lifestyle of purpose-driven public service and philanthropy. To date, he has served on more than a dozen non-profit boards. Whether chairing, championing, or in an advisory capacity, Julius whole-heartedly shares his experience and expertise as a director that drives towards desired results.",
    delay: 0.3,
  },
  {
    title: "Chief Financial Officer",
    name: "Teto T. Sauders",
    image: team2,
    desc: "As a retired paralegal, office manager and serial business owner, she serves the organization as a well of resources and information.",
    delay: 0.4,
  },
  {
    title: "Chief Administrative Officer",
    name: "Katrina R. Johnson-Smith",
    image: team1,
    desc: "As the Chief Administrative Officer of EKW Foundation, Katrina R. Johnson-Smith is the organizational powerhouse who keeps things running smoothly while dreaming big right alongside the youth we serve. Passionate about creating real, lasting impact, Katrina champions the EXP model: Exposure to life beyond limitations, Experiences that spark expertise, and an Expectation of success built on planning and preparation. With a calendar always color-coded and a heart fully invested, she brings structure, strategy, and soul to every initiative—because she believes when young people are equipped, they excel.",
    delay: 0.5,
  },
];

const headingVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -20,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: 80, transition: { duration: 0.4 } },
};

const textGroupVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Team = () => {
  const sectionRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-20 px-12 md:px-24 bg-[#FEFAEF] text-[#472C1B]" id="team" ref={sectionRef}>
      <div className="max-w-7xl mx-auto text-center" ref={ref}>
        <motion.h2
          key={inView ? "visible" : "hidden"}
          className="text-4xl md:text-5xl font-extrabold mb-4 font-[pop]"
          variants={headingVariants}
          initial="hidden"
          animate={inView ? "visible" : "exit"}
        >
          Meet our team
        </motion.h2>

        <motion.p
          className="text-[#5E4B3C] text-lg max-w-xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Passionate leaders committed to growth and impact.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white text-[#472C1B] shadow-lg p-6 flex flex-col items-center text-center gap-4"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "exit"}
              custom={member.delay}
            >
              <div
                className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>

              <motion.div
                className="px-2"
                variants={textGroupVariants}
                initial="hidden"
                animate={inView ? "visible" : "exit"}
              >
                <motion.p
                  className="text-lg text-[#5E4B3C] font-semibold"
                  variants={textItemVariants}
                >
                  {member.title}
                </motion.p>
                <motion.h4
                  className="text-2xl font-bold mt-1"
                  variants={textItemVariants}
                >
                  {member.name}
                </motion.h4>
                <motion.p
                  className="text-base mt-4 text-[#5E4B3C] leading-relaxed max-w-xl"
                  variants={textItemVariants}
                >
                  {member.desc}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
