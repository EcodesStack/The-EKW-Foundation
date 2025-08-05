import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

const WwDn = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div ref={ref}>
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        exit="exit"
        className='bg-[#F9B457] text-[#472C1B] py-10 sm:py-20 px-4 sm:px-6 md:px-12 text-center relative z-10 -mt-24 shadow-md mx-auto max-w-xs sm:max-w-7xl rounded-xl'
      >
        <motion.div
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariant}
            className='text-3xl font-[pop] sm:text-4xl md:text-5xl font-bold pb-6'
          >
            Keys to Success
          </motion.h1>

          {/* Mobile Paragraph */}
          <motion.p
            variants={itemVariant}
            className='sm:hidden leading-6 pb-6 text-base md:text-lg'
          >
            <span className='font-bold text-[#472C1B]'>C.A.R.E.S.</span> = Courteous, Accountable, Responsible, Engaged, Successful.
            Courteous: good manners, polite. Accountability is the result, owning what was and was not done.
            Responsibility is the role, defining what needs to be done.
            Engagement is one's committed involvement.
            Success, for EKW, is measured by progress and improvement, rather than the outcome(s).
            Messages addressed to "meeting group chat" will also appear in the meeting group chat in Team Chat.
          </motion.p>

          {/* Desktop Paragraph */}
          <motion.p
            variants={itemVariant}
            className='hidden sm:block text-lg md:text-lg leading-7 sm:leading-8 pb-8'
          >
            <span className='font-bold text-[#472C1B]'>C.A.R.E.S.</span> = Courteous, Accountable, Responsible, Engaged, Successful. Courteous: good manners, polite. Accountability is the result, owning what was and was not done. Responsibility is the role, defining what needs to be done. Engagement is one's committed involvement. Success, for EKW, is measured by progress and improvement, rather than the outcome(s). Messages addressed to "meeting group chat" will also appear in the meeting group chat in Team Chat.
          </motion.p>

          {/* Updated Button */}
          <motion.a
            href="#volunteer"
            variants={itemVariant}
            className='inline-block bg-white text-[#267e95] hover:bg-[#267e95] hover:text-white transition duration-300 ease-in-out font-semibold py-3 px-10 rounded-full shadow-md'
          >
            Join the Movement
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WwDn;
