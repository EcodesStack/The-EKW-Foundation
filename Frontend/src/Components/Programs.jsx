import React from 'react';
import VolunteerImg from '../assets/volunteer2.png';

const Programs = () => {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 mt-12">
      {/* Image */}
      <img
        src={VolunteerImg}
        alt="Volunteer Gardening"
        className="w-full h-[500px] sm:h-[500px] md:h-[600px] object-cover object-[center_top] sm:object-center"
      />

      {/* Dark Transparent Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#5E4B3C]/50" />
    </div>
  );
};

export default Programs;
