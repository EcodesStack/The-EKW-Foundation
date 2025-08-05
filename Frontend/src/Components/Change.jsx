import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import img1 from '../assets/rock.jpg'
import img2 from '../assets/team-work.jpg'
import img3 from '../assets/team-work-1.jpg'
import img4 from '../assets/help.jpg'

const items = [
  {
    title: 'The “Better Me” Experiment',
    desc: 'Maximizing people’s potential through self-awareness and empowerment.',
    image: img1,
  },
  {
    title: 'The CHANGE Agency',
    desc: 'Mobilizing change through resources, think tanks, and networking.',
    image: img2,
  },
  {
    title: 'Project Exposure',
    desc: 'Increasing access to diversity, opportunity, and positive role models.',
    image: img3,
  },
  {
    title: 'THE Source + ReSOURCE',
    desc: 'Empowering understanding of divine provision and life purpose.',
    image: img4,
  },
]

const Change = () => {
  return (
    <section
      className="py-12 px-12 sm:px-6 md:px-12 bg-[#F9B457]"
      id="change"
    >
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 md:px-12">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4 font-[pop] text-[#472C1B]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Creating Change
        </motion.h2>

        <motion.p
          className="text-xl mx-auto mb-12 text-[#472C1B]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Agency is <strong>the capacity <span className="font-normal">of an individual to have the </span>power and resources to fulfill their potential</strong>.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {items.map((item, index) => {
            const [ref, inView] = useInView({
              threshold: 0.3,
              triggerOnce: false,
            })

            return (
              <motion.div
                key={index}
                ref={ref}
                className="relative h-[450px] w-full overflow-hidden shadow-xl group"
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />

                <motion.div
                  className="absolute bottom-0 right-0 w-2xl bg-[#FEFAEF] p-6 max-w-[80%] text-left"
                  initial={{ opacity: 0, x: 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h4 className="text-2xl font-bold mb-4 text-[#472C1B]">{item.title}</h4>
                  <p className="text-[#472C1B] text-lg">{item.desc}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Change
