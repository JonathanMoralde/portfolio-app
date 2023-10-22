import CertificationCard from "@/components/certification/certification_card";
import Navbar from "@/components/navbar";
import SectionTitle from "@/components/sectionTitle/section_title";
import React from "react";

const Experience = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Certification Section */}
      <section className="w-full px-4 md:px-10 lg:px-28 py-10 dark:text-white">
        <article className="w-full">
          <SectionTitle text="Certifications" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
            <CertificationCard />
            <CertificationCard />
            <CertificationCard />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Experience;
