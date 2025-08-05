import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const valuesLeft = [
  {
    title: 'Courtesy',
    description: (
      <>
        Courtesy means having <strong>good manners</strong> and being <strong>polite</strong>. It’s about showing respect and consideration for others in all situations.
      </>
    ),
  },
  {
    title: 'Accountability',
    description: (
      <>
        Accountability is <strong>owning what was and wasn’t done</strong>. It means taking responsibility for your actions, results, and the impact they have.
      </>
    ),
  },
  {
    title: 'Responsibility',
    description: (
      <>
        Responsibility is <strong>defining and fulfilling your role</strong>. It’s about knowing what needs to be done and committing to do it.
      </>
    ),
  },
];

const valuesRight = [
  {
    title: 'Engagement',
    description: (
      <>
        Engagement means <strong>committed involvement</strong>. It's about being present, participating actively, and giving your full effort.
      </>
    ),
  },
  {
    title: 'Success',
    description: (
      <>
        Success is measured by <strong>progress and improvement</strong>, not just the end result. At EKW, it's about growth over time.
      </>
    ),
  },
  {
    title: 'We C.A.R.E.S. about the future!',
    description: (
      <>
        The next generation is encouraged to entrust their success to <strong>someone who C.A.R.E.S.</strong>—someone who is Courteous, Accountable, Responsible, Engaged, and Successful.
      </>
    ),
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: i * 0.15,
    },
  }),
};

const headingVariant = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedCard = ({ children, index }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

const CoreValues = () => {
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id='core-values' className="max-w-7xl mx-auto px-12 md:px-6 mt-28 sm:mt-44">
      <motion.h2
        ref={titleRef}
        className="text-4xl md:text-5xl font-bold text-center mb-12 font-[pop] text-[#472C1B]"
        variants={headingVariant}
        initial="hidden"
        animate={titleInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Our Core Values & Beliefs
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column */}
        <div className="space-y-8">
          {valuesLeft.map((value, index) => (
            <AnimatedCard key={index} index={index}>
              <div className="flex items-start gap-8">
                <FaCheckCircle className="text-[#F8A443] mt-1 flex-shrink-0" size={40} />
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-[#472C1B]">{value.title}</h3>
                  <p className="text-lg text-[#5E4B3C] leading-relaxed max-w-[600px] mx-auto">
                    {value.description}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {valuesRight.map((value, index) => (
            <AnimatedCard key={index} index={index + valuesLeft.length}>
              <div className="flex items-start gap-8">
                <FaCheckCircle className="text-[#F8A443] mt-1 flex-shrink-0" size={40} />
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-[#472C1B]">{value.title}</h3>
                  <p className="text-lg text-[#5E4B3C] leading-relaxed max-w-[600px] mx-auto">
                    {value.description}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
