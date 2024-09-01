import React from "react";
import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import healthlogo1 from "../../assets/healthlogo.jpg";

const socialLinks = [
  {
    path: "https://www.youtube.com/",
    icon: <AiFillYoutube className="group-hover:text-white w-5 h-5" />,
  },
  {
    path: "https://github.com/",
    icon: <AiFillGithub className="group-hover:text-white w-5 h-5" />,
  },
  {
    path: "https://www.instagram.com/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-5 h-5" />,
  },
  {
    path: "https://www.linkedin.com/feed/",
    icon: <RiLinkedinFill className="group-hover:text-white w-5 h-5" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/blog",
    display: "Blog",
  },
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/request-appointment",
    display: "Request an Appointment",
  },
  {
    path: "/find-location",
    display: "Find a Location",
  },
  {
    path: "/get-opinion",
    display: "Get an Opinion",
  },
];

const quickLinks03 = [
  {
    path: "/donate",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" footer">
      <div className="container mx-auto px-20 mt-16">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-10">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-start md:items-start">
            <img src={healthlogo1} alt="Health Logo" className="mb-4 w-40" />
            <p className="text-[16px] leading-7 font-light">
              © {year} developed by Khushi Babbar. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  href={link.path}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-solid border-gray-600 rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Sections */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-semibold text-black mb-6">
              Quick Links:
            </h2>
            <ul className="space-y-3">
              {quickLinks01.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-light hover:text-primaryColor transition-colors duration-300"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-semibold text-Black mb-6">
              I want to:
            </h2>
            <ul className="space-y-3">
              {quickLinks02.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-light hover:text-primaryColor transition-colors duration-300"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-semibold text-black mb-6">
              Support
            </h2>
            <ul className="space-y-3">
              {quickLinks03.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-light hover:text-primaryColor transition-colors duration-300"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
