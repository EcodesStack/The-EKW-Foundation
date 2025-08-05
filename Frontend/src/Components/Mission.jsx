import React, { useEffect, useRef, useState } from 'react';
import hopeImg from '../assets/hope.png';
import nurturingImg from '../assets/nurturing.png';
import economyImg from '../assets/economy.png';
import learnImg from '../assets/learn.png';

const Missions = () => {
  const programs = [
    {
      title: 'Creating\nHope',
      description: `Resource Distribution\nServing the underprivileged\nSupporting the distressed`,
      image: hopeImg,
    },
    {
      title: 'Nurturing\nGrowth',
      description: `Poverty Prevention\nHealth and wellness\nLife Skills and Coaching`,
      image: nurturingImg,
    },
    {
      title: 'Economic\nEnrichment',
      description: `Wealth Management\nEmployment and Ownership\nBudgeting and Planning`,
      image: economyImg,
    },
    {
      title: 'Training\nand Development',
      description: (
        <>
          The <strong>"Better Me"</strong> Experiment
          {'\n'}The Change Agency
          {'\n'}Maximizing People's Potential
        </>
      ),
      image: learnImg,
    },
  ];

  const [showCards, setShowCards] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardsRef.current) {
        const rect = cardsRef.current.getBoundingClientRect();
        setShowCards(rect.top < window.innerHeight - 100 && rect.bottom > 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="px-18 py-2" ref={cardsRef}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((program, idx) => (
          <div
            key={program.title + idx}
            className={`p-4 py-8 flex flex-col items-center text-center shadow-md transition-all duration-700 ease-out
              bg-white text-[#472C1B]
              ${showCards
                ? 'opacity-100 translate-y-[-20px]'
                : 'opacity-0 translate-y-16'}
            `}
            style={{
              transitionDelay: `${idx * 150}ms`,
            }}
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-24 h-24 mb-6 object-contain"
            />
            <h3 className="font-semibold text-lg mb-4 whitespace-pre-line">{program.title}</h3>
            <p className="mt-2 text-sm leading-relaxed whitespace-pre-line text-[#5E4B3C]">
              {program.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
