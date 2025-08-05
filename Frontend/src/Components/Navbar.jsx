import React, { useState, useEffect } from "react";
import logo from "../assets/new-logo.png";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#core-values" },
  { label: "Contact", href: "#get-in-touch" },
  { label: "Volunteer", href: "#volunteer" },
  {
    label: "Donate",
    href: "https://www.zeffy.com/embed/donation-form/ebf32fba-adf8-4579-96c2-76afd45abf83?modal=true",
    external: true,
  },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#">
            <img
              href="/"
              src={logo}
              alt="Logo"
              className={`w-24 md:w-24 transition duration-300 ${
                isScrolled ? "" : ""
              }`}
            />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                className={`text-xl font-medium text-shadow-lg font-[pop] ${
                  isScrolled ? "text-[#472C1B]" : "text-[#472C1B]"
                } hover:text-[#F8A443] transition`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <X className={`h-10 w-12 ${isScrolled ? "text-[#472C1B]" : "text-[#472C1B]"}`} />
              ) : (
                <Menu className={`h-8 w-12 ${isScrolled ? "text-[#472C1B]" : "text-[#472C1B]"}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 h-full font-[Poppins] bg-[#FEFAEF] text-[#472C1B] z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >

        <ul className="mt-20 space-y-6 flex flex-col items-center">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                onClick={toggleNavbar}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : ""}
                className="text-lg hover:text-[#F8A443] transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {mobileDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleNavbar}
        />
      )}
    </>
  );
};

export default Navbar;
