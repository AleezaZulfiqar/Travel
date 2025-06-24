


import React from 'react';
import logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#1b1e1a] w-full h-auto mt-12 px-4 py-10" id='contact'>
      <div className="flex flex-wrap  gap-20">
        {/* Logo and description */ }
        <div className="mt-8 max-w-sm " data-aos="fade-up">
          <img src={logo} alt="logo" className="w-40" />
          <p className="text-lg text-white mt-6">
            To take trivial example which us ever <br />
            undertakes laborious physica exercise <br />
            except obsome.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mt-8"  data-aos="fade-up" data-aos-delay="200">
          <h3 className="capitalize text-white text-3xl font-semibold">Quick Link</h3>
          <ul className="text-gray-300 cursor-pointer space-y-3 mt-4 text-lg">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="mt-8 w-full max-w-2xl" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-white text-3xl font-semibold">Contact Us</h2>
          <form className="mt-5 space-y-4 w-full">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-md text-gray-300 bg-[#353a33]"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-md text-gray-300 bg-[#353a33]"
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full px-4 py-3 rounded-md text-gray-300 bg-[#353a33]"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full px-4 py-3 rounded-md text-gray-300 bg-[#353a33]"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Message"
                className="w-full px-4 py-4 bg-[#353a33] rounded-md text-gray-300"
                rows={4}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button className="capitalize bg-[#63ab45] text-xl font-semibold px-8 py-4 rounded-md text-white">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;

