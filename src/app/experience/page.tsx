import CertificationCard from "@/components/certification/certification_card";
import Navbar from "@/components/navbar";
import SectionTitle from "@/components/sectionTitle/section_title";
import React from "react";

const Experience = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Certification Section */}
      <section className="container px-4 py-10 text-white">
        <article className="container">
          <SectionTitle text="Certifications" />
          <CertificationCard />
          <CertificationCard />
          <CertificationCard />
        </article>
      </section>
    </main>
  );
};

export default Experience;
