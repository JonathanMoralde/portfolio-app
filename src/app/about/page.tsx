import Navbar from "@/components/navbar";
import StackCard from "@/components/techstack/stack_card";
import React from "react";

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

const About = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* About section */}
      <section className="container text-white px-4 py-10">
        <article className="container">
          <h3 className="text-3xl mb-4 font-semibold">About</h3>
          <p className="mb-4 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat
            sapien eros, non interdum turpis sodales sit amet.
          </p>
          <p className=" text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </article>
      </section>

      {/* Tech stack section */}
      <section className="container text-white px-4 pb-10">
        <article className="container">
          <h3 className="text-3xl mb-4 font-semibold">Technology Stack</h3>
          <div className="container flex flex-wrap">
            {/* <StackCard url="/techstack/React-icon.svg" />
            <StackCard url="/techstack/Bootstrap_logo.svg" />
            <StackCard url="/techstack/Tailwind_CSS_logo.svg" />
            <StackCard url="/techstack/expressjs-icon.svg" />
            <StackCard url="/techstack/next-js-seeklogo.com.svg" />
            <StackCard url="/techstack/PHP-logo.svg" />
            <StackCard url="/techstack/mysql-logo-svgrepo-com.svg" />
            <StackCard url="/techstack/flutter-svgrepo-com.svg" />
            <StackCard url="/techstack/Firebase_Logo_Vertical_Lockup.svg" />
            <StackCard url="/techstack/Figma Icon (Community).svg" /> */}
            {techStackImages.map((url, index) => (
              <StackCard key={index} url={url} />
            ))}
          </div>
        </article>
      </section>

      {/* Education background section */}
      <section className="container text-white px-4 pb-10">
        <article className="container">
          <h3 className="text-3xl mb-4 font-semibold">
            Educational Background
          </h3>
        </article>
      </section>
    </main>
  );
};

export default About;
