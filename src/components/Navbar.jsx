import React, { useRef, useState } from "react";
import { Socials } from "../data";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Projects", to: "/projects" },
  { name: "Skills", to: "/skills" },
  { name: "About", to: "/about" },
  { name: "Blog", to: "/blog" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="max-w-screen-2xl mx-auto h-[65px] flex items-center justify-between">
        {/* Logo */}
        <a href="#about-me" className="flex flex-row items-center">
          {/* <img
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          /> */}
          <span className="text-xl font-bold text-gray-300">Nayem Khan</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-10 border border-[#7042f861] bg-[#0300145e] px-10 py-2 rounded-full text-sm text-gray-200">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="text-primary"
                  className="cursor-pointer hover:text-primary transition font-semibold text-base"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex flex-row gap-4 ml-4">
          {Socials.map((social) => (
            <img
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="cursor-pointer hover:scale-110 transition"
            />
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0300145e] py-4 space-y-4 text-center text-gray-100">
          <a
            href="#about-me"
            className="block hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            About me
          </a>
          <a
            href="#skills"
            className="block hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>

          <div className="flex justify-center gap-5 pt-4">
            {Socials.map((social) => (
              <img
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
                className="cursor-pointer hover:scale-110 transition"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
