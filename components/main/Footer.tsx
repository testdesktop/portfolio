import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="mb-[20px] text-[15px] text-center">
          &copy; 2024 | All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
