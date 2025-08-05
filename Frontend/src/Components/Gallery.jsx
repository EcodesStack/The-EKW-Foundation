import React from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2Img.jpg';
import img3 from '../assets/3Img.jpg';
import img4 from '../assets/4Img.jpg';
import img5 from '../assets/cleanup.jpg';
import img6 from '../assets/3.png';

const Gallery = () => {
  return (
    <section className="w-full px-12 -mt-[300px] pb-8 z-10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[img1, img2, img3, img4, img5, img6].map((img, index) => (
          <div
            key={index}
            className="w-full h-[350px] overflow-hidden shadow-md transform transition-transform duration-500 hover:scale-[1.03] cursor-pointer relative"
          >
            {/* Image */}
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#5E4B3C]/50 z-10" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
