import EducationalBg from "@/components/educationalbg/educationbg";
import Navbar from "@/components/navbar";
import SectionTitle from "@/components/sectionTitle/section_title";
import StackCard from "@/components/techstack/stack_card";
import React, { useState } from "react";

const techStackImages = [
  "/techstack/React-icon.svg",
  "/techstack/Bootstrap_logo.svg",
  "/techstack/Tailwind_CSS_logo.svg",
  "/techstack/expressjs-icon.svg",
  "/techstack/next-js-seeklogo.com.svg",
  "/techstack/PHP-logo.svg",
  "/techstack/mysql-logo-svgrepo-com.svg",
  "/techstack/flutter-svgrepo-com.svg",
  "/techstack/Firebase_Logo_Vertical_Lockup.svg",
  "/techstack/Figma Icon (Community).svg",
];

const educationalBgDetails = [
  {
    school: "Bicol University Polangui",
    yr: "2020-Present",
    description: "Bachelor of Science in Information Technology",
  },
  {
    school: "Universidad de Sta. Isabel",
    yr: "2018-2020",
    description: "Science, Technology, Engineering, and Mathematics",
  },
  {
    school: "Universidad de Sta. Isabel - Pili Campus",
    yr: "2014-2018",
    description: "Junior High School",
  },
  {
    school: "Pili Central School",
    yr: "2008-2014",
    description: "Elementary School",
  },
];

const About = () => {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        {/* About section */}
        <section className="w-full dark:text-white px-4 py-10 md:px-10 lg:px-28">
          <article className="w-full">
            <SectionTitle text="About" />

            <p className="mb-4 text-xl lg:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              placerat sapien eros, non interdum turpis sodales sit amet.
            </p>
            <p className=" text-xl lg:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </article>
        </section>

        {/* Tech stack section */}
        <section className="w-full dark:text-white px-4 md:px-10 lg:px-28 pb-10">
          <article className="w-full">
            <SectionTitle text="Technology Stack" />

            <div className="w-full md:w-3/4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {techStackImages.map((url, index) => (
                <StackCard key={index} url={url} />
              ))}
            </div>
          </article>
        </section>

        {/* Education background section */}
        <section className="w-full dark:text-white px-4 md:px-10 lg:px-28 pb-10">
          <SectionTitle text="Educational Background" />

          <article className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {educationalBgDetails.map((entry, index) => (
              <EducationalBg
                key={index}
                school={entry.school}
                yr={entry.yr}
                description={entry.description}
              />
            ))}
          </article>
        </section>
      </main>
    </>
  );
};

export default About;
