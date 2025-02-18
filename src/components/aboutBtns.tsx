"use client";
import React from "react";
import StyledBtn from "./styledBtn/styledBtn";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

type Props = {};

const AboutBtns = (props: Props) => {
  return (
    <div className="flex items-center flex-col md:flex-row gap-4">
      <div className="flex gap-4">
        <StyledBtn
          text="REACH OUT"
          isLink={true}
          href="mailto:jonathanhernandez.moralde@gmail.com"
          margin="mx-0"
        />
        <StyledBtn
          text="Download CV"
          isLink={true}
          isDropdown={true}
          target="_blank"
          dropdownOptions={[
            {
              label: "Software/Web/Frontend Developer",
              href: "https://drive.google.com/uc?export=download&id=1KDq5JHZ78DWydXkzmE7dqQk0BkmgFhif",
            },
            {
              label: "Mobile/Flutter Developer",
              href: "https://drive.google.com/uc?export=download&id=1LyKXRO7ypX5EXK9GyIZ4v5VY1M-N6F4l",
            },
          ]}
          btnColor="bg-gray-500 dark:bg-gray-200"
          textColor="dark:text-[#181B1A] text-white"
          margin="mx-0"
        />
      </div>
      <div className="text-olive-green text-xl lg:text-2xl flex gap-4">
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
    </div>
  );
};

export default AboutBtns;
