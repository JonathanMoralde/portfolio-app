import React from "react";
import {
  FaArrowUp,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import BackToTop from "./backToTop";

const Footer = () => {
  return (
    <div className="w-full py-6 md:py-10 lg:py-20 bg-[#38473b] text-white px-4 md:px-10 lg:px-48">
      <div className="flex justify-between items-center mb-5">
        <h3 className="lg:text-8xl md:text-6xl text-5xl font-semibold">
          Reach Out
        </h3>

        <BackToTop />
      </div>
      <div className=" mb-20">
        <a
          href="mailto:jonathanhernandez.moralde@gmail.com"
          className="text-lg md:text-xl lg:text-2xl"
        >
          jonathanhernandez.moralde@gmail.com
        </a>
      </div>
      <div className="mb-20 text-white text-xl lg:text-2xl flex gap-4">
        <Link href="https://github.com/JonathanMoralde/" target="_blank">
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jonathan-moralde-27a5232a6/"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link href="https://www.facebook.com/jonathantantantan" target="_blank">
          <FaFacebook />
        </Link>
      </div>

      <div className="flex justify-between items-end">
        <ul className="list-none dark:text-white flex flex-col gap-4 font-normal text-base md:text-lg lg:text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects/all/all">Projects</Link>
          </li>
          <li>
            <Link href="/experience">Experience</Link>
          </li>
        </ul>
        <p>JONATHAN MORALDE 2024. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;
