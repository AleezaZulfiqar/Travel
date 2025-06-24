







import React, { useState } from "react";
import logo from "../Assets/logo.png";
import hero from "../Assets/hero.jpg";
import discovery from "../Assets/discovery.png";
import mountain from "../Assets/Mountain.png";
import Adventure from "../Assets/Adventure.png";
import beach from "../Assets/beach.png";
import popular from "../Assets/popular.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="h-[600px] bg-cover bg-no-repeat relative"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-black opacity-80">
          <div className="flex justify-center mt-32 sm:mt-36 lg:mt-32">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold text-center" data-aos="fade-up">
              Tour Travel & <br /> Adventure Camping
            </h1>
          </div>
          <div className="mt-10 flex justify-center px-4" data-aos="fade-up">
            <p className="text-white text-center text-base sm:text-lg lg:text-xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br />
              vestibulum dapibus augue. Proin mollis ipsum vitae finibus suscipit.
            </p>
          </div>
          <div className="mt-5 flex justify-center" data-aos="fade-up">
            <button className="bg-[#63ab45] px-7 py-3 text-white text-lg font-bold rounded-md text-center">
              Book Now
            </button>
          </div>
        </div>

        <nav className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <img className="h-14 w-auto" src={logo} alt="Logo" />
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex md:space-x-5 items-center lg:space-x-14">
                <a href="*" className="text-white text-lg font-medium hover:text-gray-300">
                  Home
                </a>
                <a href="#about" className="text-white text-lg font-medium hover:text-gray-300">
                  About Us
                </a>
                <a href="#popular" className="text-white text-lg font-medium hover:text-gray-300">
                  Services
                </a>
                <a href="#explore" className="text-white text-lg font-medium hover:text-gray-300">
                  Explore
                </a>
                <button className="bg-white text-black rounded px-7 py-3 text-lg font-medium hover:bg-gray-300">
                 <a href="#contact"> Contact Us</a>
                </button>
              </div>

              {/* Mobile Toggle Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="bg-white text-black focus:outline-none focus:ring-2 focus:ring-white"
                >
                  {isOpen ? (
                    <svg className="h-8 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-8 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden px-4 pb-4 pt-2 space-y-5 bg-white">
              <a href="*" className="block text-black text-base font-medium hover:text-gray-300">
                Home
              </a>
              <a href="*" className="block text-black text-base font-medium hover:text-gray-300">
                About Us
              </a>
              <a href="*" className="block text-black text-base font-medium hover:text-gray-300">
                Services
              </a>
              <a href="*" className="block text-black text-base font-medium hover:text-gray-300">
                Testimonial
              </a>
              <button className="bg-[#63ab45] text-white rounded px-4 py-1 text-base font-medium hover:bg-gray-300">
                Contact Us
              </button>
            </div>
          )}
        </nav>
      </div>

      {/* Cards Section */}
      <div className="relative -top-10 sm:-top-16 md:-top-20 lg:-top-24 flex flex-wrap justify-center gap-5 px-4"   data-aos="fade-right"
  data-aos-delay="100" style={{backgroundImage:`url(${popular})`}}>
        {[{ img: discovery, title: "Discovery" }, { img: mountain, title: "Mountain Biking" }, { img: Adventure, title: "Adventure" }, { img: beach, title: "Beach" }].map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl h-60 w-80 sm:w-72 md:w-64 shadow-md"
          >
            <div className="flex justify-center pt-4">
              <img src={card.img} alt={card.title} data-aos="fade-right" data-aos-delay="100" />
            </div>
            <div className="flex flex-col justify-center items-center px-4">
              <h2 className="text-center text-2xl font-semibold">{card.title}</h2>
              <p className="text-sm sm:text-lg text-gray-500 text-center pt-3 px-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;















