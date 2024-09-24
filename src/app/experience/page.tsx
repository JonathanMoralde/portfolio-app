import CertificationContainer from "@/components/certification/certification_container";
import Navbar from "@/components/navbar";
import SectionTitle from "@/components/sectionTitle/section_title";
import React from "react";
import ExperienceCard from "./experienceCard";
import AnimateScroll from "@/components/AnimateScroll";

export type Experience = {
  position: string;
  company: string;
  date: string;
  description: string;
  tech: string;
};

const Experience = () => {
  const experiences: Experience[] = [
    {
      position: "Frontend Developer Intern",
      company: "Pixel8 Web Solutions & Consultancy Inc.",
      date: "Feb - Apr 2024",
      description:
        "Performed software development tasks as well as quality assurance. Communicated and collaborated closely with a team of developers.",
      tech: "Quasar, Vuejs, JSON Server, Axios, Git, Gitlab",
    },
    {
      position: "Freelance/Project-based Software Developer",
      company: "Project-based Clients",
      date: "Sep - Aug 2024",
      description:
        "Worked on various web-based and android-based systems. Communicated with clients and transformed prototypes into functional systems that met project goals and deadlines.",
      tech: "HTML, CSS, Javascript, Typescript, Next.js, React, Tailwind, Bootstrap, PHP, MySQL, Flutter, and Firebase",
    },

    // {
    //   position: "Freelance Software Developer",
    //   company: "Barangay Document Request System",
    //   date: "Aug - Aug 2024",
    //   description:
    //     "Developed the admin panel for a Document Request System, enabling efficient management of document requests for a local community. The system enables accessibility of essential services and information for the constituents.",
    //   tech: "Next.js, TailwindCSS, Typescript, Firebase",
    // },
    // {
    //   position: "Freelance Software Developer",
    //   company: "Chat Messenger App",
    //   date: "May - Jun 2024",
    //   description:
    //     "Developed the Android app that lets students connect with each other. Fostering collaboration, engagement, and mutual growth among students which enriches academic experience and promotes interconnectedness.",
    //   tech: "Flutter, Firebase, Agora SDK, Nodejs",
    // },
    // {
    //   position: "Freelance Software Developer",
    //   company: "Attendance Monitoring App",
    //   date: "Jan - Jan 2024",
    //   description:
    //     "Developed the Android app that allows the faculty members to efficiently track attendance using NFC technology. The app streamlines attendance management by also generating reports and analytics.",
    //   tech: "Flutter, SQLite",
    // },
    // {
    //   position: "Freelance Software Developer",
    //   company: "Web-based Class Timetabling System",
    //   date: "Dec 2023 - Jan 2024",
    //   description:
    //     "Improved application stability and performance through code refactoring and bug resolution. The system enables efficient management of class scheduling for school admins.",
    //   tech: "HTML, CSS, Javascript, Bootstrap, PHP, MySQL",
    // },
    // {
    //   position: "Freelance Software Developer",
    //   company: "Home Services Platform App",
    //   date: "Nov - Nov 2023",
    //   description:
    //     "Integrated firebase services in the system and other important features to ensure the application's functional suitability. This system enables accessibility and efficient communication between users and service providers.",
    //   tech: "Nextjs, TailwindCSS, Typescript, Flutter, Firebase",
    // },
    // {
    //   position: "Freelance Software Developer",
    //   company: "Web-based Enrollment Management System",
    //   date: "Oct - Oct 2023",
    //   description:
    //     "Developed the admin panel for an Enrollment Management System, enabling accessibility and efficient management of student enrollment as well as student data.",
    //   tech: "HTML, CSS, Javascript, Bootstrap, PHP, MySQL",
    // },
    // {
    //   position: "Freelance Software Developer",
    //   company: "Automobile Services Platform App",
    //   date: "Sep - Sep 2023",
    //   description:
    //     "Integrated firebase services in the system and translated the UI design prototype to a Flutter app with an intuitive user interface. This system enables accessibility to users as it provides a platform for both the users and automobile service providers.",
    //   tech: "Flutter, Firebase",
    // },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Experience Section */}
      <section className="w-full px-4 md:px-10 lg:px-48 py-10 dark:text-white">
        <article className="w-full">
          <AnimateScroll>
            <SectionTitle
              text="Experiences"
              className=" mb-4 lg:mb-10 text-center md:text-left"
            />
          </AnimateScroll>
          <div className="flex flex-col gap-4">
            {experiences.map((exp, index) => (
              <AnimateScroll key={index}>
                <ExperienceCard data={exp} />
              </AnimateScroll>
            ))}
          </div>
        </article>
      </section>

      {/* Certification Section */}
      <section className="w-full px-4 md:px-10 lg:px-48 py-10 dark:text-white">
        <article className="w-full">
          <AnimateScroll>
            <SectionTitle
              text="Certificates"
              className=" mb-4 lg:mb-10 text-center md:text-left"
            />
          </AnimateScroll>
          <AnimateScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
              <CertificationContainer />
            </div>
          </AnimateScroll>
        </article>
      </section>
    </main>
  );
};

export default Experience;
