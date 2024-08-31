import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import BackToTop from "./backToTop";
import LeftToRight from "./LeftToRight";

const Footer = () => {
  return (
    <div className="w-full py-6 md:py-10 lg:py-20 bg-[#38473b] text-white px-4 md:px-10 lg:px-48">
      <LeftToRight>
        <div className="flex justify-between items-center mb-5">
          <h3 className="lg:text-8xl md:text-6xl text-5xl font-semibold">
            Reach Out
          </h3>

          <BackToTop />
        </div>
      </LeftToRight>
      <div className=" mb-20">
        <LeftToRight>
          <a
            href="mailto:jonathanhernandez.moralde@gmail.com"
            className="text-lg md:text-xl lg:text-2xl"
          >
            jonathanhernandez.moralde@gmail.com
          </a>
        </LeftToRight>
      </div>
      <LeftToRight>
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
          <Link
            href="https://www.facebook.com/jonathantantantan"
            target="_blank"
          >
            <FaFacebook />
          </Link>
        </div>
      </LeftToRight>

      <div className="flex justify-between items-end">
        <ul className="list-none dark:text-white flex flex-col gap-4 font-normal text-base md:text-lg lg:text-xl">
          <li>
            <LeftToRight>
              <Link href="/">Home</Link>
            </LeftToRight>
          </li>

          <li>
            <LeftToRight>
              <Link href="/projects/all/all">Projects</Link>
            </LeftToRight>
          </li>
          <li>
            <LeftToRight>
              <Link href="/experience">Experience</Link>
            </LeftToRight>
          </li>
        </ul>
        <LeftToRight>
          <p>
            JONATHAN MORALDE {new Date().getFullYear()}. ALL RIGHTS RESERVED
          </p>
        </LeftToRight>
      </div>
    </div>
  );
};

export default Footer;
