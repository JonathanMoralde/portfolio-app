import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full pb-6 md:pb-10">
      {/* divider */}
      <div className=" h-1 bg-olive-green mx-4 md:mx-10 lg:mx-48 mb-4 md:mb-5 lg:mb-6"></div>
      {/* logo & social icons */}
      <div className="flex justify-between items-center px-4 md:px-10 lg:px-48">
        <Link
          href="/"
          className="font-semibold text-xl md:text-3xl lg:text-4xl dark:text-white me-4"
        >
          Jhm.
        </Link>

        <div className="flex text-xl lg:text-2xl dark:text-white">
          <Link href="https://www.instagram.com/tanhernandezz/" target="_blank">
            <FaInstagram />
          </Link>
          <Link
            href="https://www.facebook.com/jonathantantantan"
            className="ms-4 "
            target="_blank"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://github.com/JonathanMoralde/"
            className="ms-4 "
            target="_blank"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
