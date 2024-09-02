import AboutBtns from "@/components/aboutBtns";
import Navbar from "@/components/navbar";
import ProjectContainer from "@/components/projects/project_container";
import SectionTitle from "@/components/sectionTitle/section_title";
import TechStackSlider from "@/components/techstack/techStackSlider";
import AnimateScroll from "../components/AnimateScroll";
import HeroImage from "@/components/heroImage";

export default function Home() {
  return (
    <>
      <main className="min-h-content dark:bg-hero-pattern-dark bg-hero-pattern-light">
        <Navbar />
        {/* Hero Section */}
        <section className="h-sm-hero lg:h-lg-hero lg:overflow-hidden flex flex-col justify-between md:justify-center items-center md:text-left md:flex-row ">
          {/* Text */}
          <div className="container px-4 pt-4 md:w-2/5  md:me-[-3.5rem] lg:me-[-10rem] text-center md:text-left ">
            <AnimateScroll>
              <h3 className="dark:text-white lg:text-4xl md:text-2xl text-xl font-semibold">
                Software Developer
              </h3>
            </AnimateScroll>
            <AnimateScroll>
              <h1 className="text-olive-green lg:text-8xl md:text-6xl text-5xl font-semibold uppercase">
                Jonathan Moralde
              </h1>
            </AnimateScroll>
          </div>
          {/* Image */}
          <HeroImage />
        </section>

        {/* About section */}
        <section className="w-full dark:text-white dark:bg-[#181B1A] bg-gray-100 px-4 pt-20 pb-10 md:pb-20 md:px-10 lg:px-48">
          <article className="w-full">
            <AnimateScroll>
              <p className="mb-10 text-xl lg:text-[2.5rem] leading-normal">
                Hi! I&apos;m Jonathan, a dedicated junior software developer
                with a background in web and mobile development through
                internship and freelance projects.
              </p>
            </AnimateScroll>

            <AnimateScroll>
              <p className="mb-10 text-xl lg:text-[2.5rem] leading-normal">
                I am committed to delivering efficient service and achieving
                excellence in every project. Whether working in a team or
                independently, I aim to make valuable contributions to the
                success of projects. I am always eager to broaden my knowledge
                and skills in order to continue progressing in software
                development.
              </p>
            </AnimateScroll>

            <AnimateScroll>
              <p className="mb-10 text-xl lg:text-[2.5rem] leading-normal">
                Interested in working together?
              </p>

              <AboutBtns />
            </AnimateScroll>
          </article>
        </section>

        <section className="w-full dark:text-white dark:bg-[#181B1A] bg-gray-100 px-4 py-10 md:py-20 md:px-10 lg:px-48">
          <article>
            <AnimateScroll>
              <SectionTitle
                text="Technical Skills"
                className=" mb-4 lg:mb-10 text-center md:text-left"
              />
            </AnimateScroll>
            <AnimateScroll>
              <TechStackSlider />
            </AnimateScroll>
          </article>
        </section>

        {/* Recent Projects Section */}
        <section className="w-full pt-10 md:pt-20 pb-20 px-4 md:px-10 lg:px-48 bg-gray-100 dark:bg-[#181B1A] dark:text-white text-center md:text-left">
          <div className="">
            <AnimateScroll>
              <SectionTitle text="Recent Projects" className=" mb-4 lg:mb-10" />
            </AnimateScroll>
          </div>

          <AnimateScroll>
            <article className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <ProjectContainer isLimit={true} />
            </article>
          </AnimateScroll>
        </section>
      </main>
    </>
  );
}
