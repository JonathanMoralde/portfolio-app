import CertificationCard from "@/components/certification/certification_card";
import CertificationContainer from "@/components/certification/certification_container";
import Navbar from "@/components/navbar";
import SectionTitle from "@/components/sectionTitle/section_title";
import React from "react";
import ExperienceCard from "./experienceCard";

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
      tech: "Quasar, Vuejs, JSON Server, Axios, Gitlab",
    },
    {
      position: "Freelance Fullstack Developer",
      company: "Document Request System",
      date: "Aug - Aug 2024",
      description:
        "Developed the admin panel for a Document Request System, enabling efficient management of document requests for a local community. The system enables accessibility of essential services and information for the constituents.",
      // Implemented features such as resident and household management, blotter report tracking,  public announcements, electric bill posting, and PDF generation for official documents.
      tech: "Next.js, Firebase",
    },
    {
      position: "Freelance Fullstack Developer",
      company: "Chat Messenger App",
      date: "May - Jun 2024",
      description:
        "Developed the Android app that lets students connect with each other. Fostering collaboration, engagement, and mutual growth among students which enriches academic experience and promote interconnectedness.",
      tech: "Flutter, Firebase, Agora SDK, Nodejs",
    },
    {
      position: "Freelance Fullstack Developer",
      company: "Web-based Class Timetabling System",
      date: "Dec 2024 - Jan 2024",
      description:
        "Improved application stability and performance through code refactoring and bug resolition. The system enables efficient management of class scheduling for school admins.",
      tech: "HTML, CSS, Javascript, Bootstrap, PHP, MySQL",
    },
    {
      position: "Freelance Fullstack Developer",
      company: "Home Service Locator App",
      date: "Oct - Nov 2023",
      description:
        "Integrated firebase services in the system and other important features to ensure the application's functional suitability. This system enables accessibility and efficient communication between users and service providers.",
      tech: "Nextjs, Flutter, Firebase, TailwindCSS",
    },
    {
      position: "Freelance Fullstack Developer",
      company: "Web-based Enrollment Management System",
      date: "Sep - Sep 2023",
      description:
        "Developed the admin panel for an Enrollment Management System, enabling accessibility and efficient management of student enrollment as well as student data.",
      tech: "HTML, CSS, Javascript, Bootstrap, PHP, MySQL",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Experience Section */}
      <section className="w-full px-4 md:px-10 lg:px-48 py-10 dark:text-white">
        <article className="w-full">
          <SectionTitle text="Experiences" className=" mb-4 lg:mb-10" />
        </article>
        <div className="flex flex-col gap-4">
          {experiences.map((exp, index) => (
            <ExperienceCard data={exp} key={index} />
          ))}
        </div>
      </section>

      {/* Certification Section */}
      <section className="w-full px-4 md:px-10 lg:px-48 py-10 dark:text-white">
        <article className="w-full">
          <SectionTitle text="Certificates" className=" mb-4 lg:mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
            <CertificationContainer />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Experience;
