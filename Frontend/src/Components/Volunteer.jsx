import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import agentIcon from "../assets/agent.png";
import donationIcon from "../assets/donation.png";
import fundraiserIcon from "../assets/fundraiser.png";
import volunteerIcon from "../assets/volunteer.png";

const cardData = [
  {
    icon: agentIcon,
    title: "Make a change",
    description:
      "Whether an agent or a champion, your efforts and energy are invaluable to us. We are delighted to share this vision of CHANGE in Atlanta with you.",
    linkText: "Get in contact with us",
    href: "/#get-in-touch",
  },
  {
    icon: donationIcon,
    title: "Make Donation",
    description:
      "Give a donation today. Your contributions are tax-deductible seeds sown into the lives of those that are changing for the better, every day.",
    linkText: "Donate Now",
    href: "https://www.zeffy.com/embed/donation-form/ebf32fba-adf8-4579-96c2-76afd45abf83?modal=true",
    external: true,
  },
  {
    icon: fundraiserIcon,
    title: "Become a Fundraiser",
    description:
      "Partner with us as we solicit to get more valuable resources and revenue through grants, donors, campaigns, and sponsorships.",
    linkText: "Connect with us",
    href: "/#get-in-touch",
  },
  {
    icon: volunteerIcon,
    title: "Become A Volunteer",
    description:
      "Share your gifts of time and talent with us. Passionate people are the most important part of the mission and programming.",
    linkText: "Let us know",
    href: "/#get-in-touch",
  },
];

const Volunteer = () => {
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <section
      id="volunteer"
      ref={sectionRef}
      className="relative py-14 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto px-12 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          layout="position"
          className="bg-[#FEFAEF] text-[#472C1B] p-6 md:p-8 md:px-12 shadow-xl min-h-[600px] flex flex-col justify-center"
        >
          <div className="max-w-xl">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight font-[pop]">
              Become an agent <br /> or a champion of change
            </h3>
            <p className="text-base md:text-lg leading-relaxed mb-8 text-[#5E4B3C] font-[Helvetica]">
              There comes a time in each of our lives where we must endeavor to{" "}
              <strong>be</strong> the change we desire to <em>see</em> in the
              world. Change begins with each of us individually and grows from
              there. Agents <em>foster</em> change and champions <em>fight</em>{" "}
              for it. Which one will you <strong>BE</strong>?
            </p>
            <a
              href="#get-in-touch"
              className="inline-block rounded-md px-8 py-3 font-semibold uppercase font-[pop] bg-[#F8A443] text-white hover:bg-[#e79435] transition"
            >
              Become Now!
            </a>
          </div>
        </motion.div>

        {/* Right Column - Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cardData.map((item, index) => {
            const [cardInViewRef, cardInView] = useInView({
              triggerOnce: false,
              threshold: 0.2,
            });

            return (
              <motion.div
                key={index}
                ref={cardInViewRef}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={
                  cardInView
                    ? { opacity: 1, rotateY: 0 }
                    : { opacity: 0, rotateY: 90 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#FEFAEF] text-[#472C1B] p-8 shadow-lg min-h-[300px] flex flex-col justify-between"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-[#F8A443] rounded-full flex items-center justify-center mb-4">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h4 className="text-xl font-semibold mb-6">{item.title}</h4>
                  <p className="text-base leading-relaxed text-[#5E4B3C]">
                    {item.description}
                  </p>
                </div>
                <div className="text-center">
                  <a
                    href={item.href}
                    className="text-[#472C1B] border-b-2 border-[#F8A443] hover:text-[#F8A443] transition"
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.linkText}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
