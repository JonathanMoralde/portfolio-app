import Navbar from "@/components/navbar";
import SectionTitle from "@/components/sectionTitle/section_title";
import React from "react";

const Contact = () => {
  return (
    <main>
      <Navbar />

      {/* Contact Section */}
      <section className="container px-4 py-10 text-white">
        <article className="container">
          <SectionTitle text="Contact" />
          <p className="mb-4">Interested in working together?</p>
          <p className="mb-4">
            Feel free to send an email or contact me at my socials.
          </p>
          <p className="mb-4">jonathanhernandez.moralde @bicol-u.edu.ph</p>
        </article>
      </section>
    </main>
  );
};

export default Contact;
