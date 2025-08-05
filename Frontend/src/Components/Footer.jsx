import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-12 w-full text-[#FEFAEF] bg-[#393E46]">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-[#FEFAEF]/30 pb-10">
        {/* Logo & Description */}
        <div className="md:max-w-md">
          <h2 className="text-2xl font-bold">E.K.W Foundation</h2>
          <p className="mt-4 text-sm leading-relaxed">
            E.K.W Foundation is committed to uplifting communities through compassion, empowerment, and service.
            We believe in being the change we want to see — one act of kindness at a time.
          </p>
        </div>

        {/* Links & Contact */}
        <div className="flex-1 flex items-start md:justify-end gap-16">
          <div>
            <h3 className="font-semibold mb-4 text-[#FEFAEF]">Explore</h3>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#core-values" className="hover:underline">About Us</a></li>
              <li><a href="#get-in-touch" className="hover:underline">Contact</a></li>
              <li><a href="#volunteer" className="hover:underline">Volunteer</a></li>
              <li><a href="#donate" className="hover:underline">Donate</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-[#FEFAEF]">Get in Touch</h3>
            <ul className="text-sm space-y-2">
              <li>+1-212-456-7890</li>
              <li>info@ekwfoundation.org</li>
              <li><a href="https://www.ekwfoundation.org" target="_blank" className="italic hover:underline">www.ekwfoundation.org</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <p className="pt-6 text-center text-xs md:text-sm text-[#FEFAEF]/70">
        &copy; {new Date().getFullYear()} E.K.W Foundation. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
