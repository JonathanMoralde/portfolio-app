import Navbar from "@/components/navbar";
import SectionTitle from "@/components/sectionTitle/section_title";
import React from "react";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Contact Section */}
      <section className="w-full px-4 md:px-10 lg:px-48 py-10 dark:text-white">
        <article className="w-full">
          <SectionTitle text="Contact" />
          <div className="lg:text-2xl">
            <p className="mb-4">Interested in working together?</p>
            <p className="mb-4">
              Feel free to send an{" "}
              <a
                href="mailto:jonathanhernandez.moralde @bicol-u.edu.ph"
                className="border-b-2 border-gray-950 dark:border-gray-100"
              >
                email
              </a>{" "}
              or contact me at my socials.
            </p>
            <p className="mb-4">jonathanhernandez.moralde@bicol-u.edu.ph</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Contact;
