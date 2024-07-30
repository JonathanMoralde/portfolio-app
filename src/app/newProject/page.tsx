"use client";

import Navbar from "@/components/navbar";
import SectionTitle from "@/components/sectionTitle/section_title";
import StyledBtn from "@/components/styledBtn/styledBtn";
import React, { useState } from "react";
import supabase from "../../../supabase";

const page = () => {
  const [selectedTechStack, setSelectedTechStack] = useState<Array<string>>([]);
  const [projectName, setProjectName] = useState<string>("");
  const [projectLink, setProjectLink] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const techStack = [
    "HTML5",
    "CSS3",
    "JAVASCRIPT",
    "REACT",
    "BOOTSTRAP",
    "PHP",
    "MYSQL",
    "FLUTTER",
    "FIREBASE",
    "EXPRESSJS",
    "MONGODB",
    "TAILWIND",
    "NEXTJS13",
    "VUEJS",
    "QUASAR",
  ];

  const handleCheckBox = (tech: string) => {
    if (selectedTechStack.includes(tech)) {
      const newValue = selectedTechStack.filter((t) => t !== tech);
      setSelectedTechStack(newValue);
      return;
    }

    setSelectedTechStack([...selectedTechStack, tech]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (
        selectedFile.type === "image/png" ||
        selectedFile.type === "image/jpeg"
      ) {
        setFile(selectedFile);
      } else {
        setFile(null);
        alert("Please upload a PNG or JPG file.");
      }
    }
  };

  const insertProject = async (imageUrl: string) => {
    const { data, error } = await supabase
      .from("projects")
      .insert([
        {
          image_url: imageUrl,
          stack: selectedTechStack,
          title: projectName,
          project_link: projectLink,
        },
      ])
      .select();

    if (error) {
      console.log(error);
      return;
    }

    return data;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file || !projectName || !selectedTechStack) {
      alert("Please fill out the details");
      return;
    }

    const { data, error } = await supabase.storage
      .from("projects")
      .upload(file.name, file as File);

    if (error) {
      console.log(error);
      return;
    }

    const imagePath = data.path; // Get the path of the uploaded image
    const imageUrl = `${
      supabase.storage.from("projects").getPublicUrl(imagePath).data.publicUrl
    }`;

    insertProject(imageUrl).then((data) => {
      console.log(data);
    });
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="w-full px-4 md:px-10 lg:px-48 py-10 dark:text-white text-center">
        <SectionTitle text="Add new Project" />
        <form onSubmit={handleSubmit} className="w-2/5 mx-auto">
          {/* Title */}
          <div className="flex flex-col items-center mb-10">
            <label htmlFor="project-name" className="mb-2 text-xl">
              Project Name
            </label>
            <input
              type="text"
              name="project-name"
              id="project-name"
              className="w-full text-black px-2 py-1"
              placeholder="Enter project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>

          {/* Link */}
          <div className="flex flex-col items-center mb-10">
            <label htmlFor="project-name" className="mb-2 text-xl">
              Project Link
            </label>
            <input
              type="text"
              name="project-link"
              id="project-link"
              className="w-full text-black px-2 py-1"
              placeholder="Enter project link"
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
            />
          </div>

          {/* Tech stack */}
          <div className="flex flex-col items-center mb-10">
            <p className="mb-2 text-xl">Tech stack used:</p>
            <div className="grid grid-cols-3 grid-rows-5 text-left gap-4 w-full">
              {techStack.map((tech) => {
                return (
                  <div key={tech}>
                    <input
                      type="checkbox"
                      name="tech-stack"
                      id={tech}
                      className="mr-2"
                      onChange={() => handleCheckBox(tech)}
                    />
                    <label htmlFor={tech}>{tech}</label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="flex flex-col items-center mb-10">
            <label htmlFor="project-img" className="mb-2 text-xl">
              Project Image
            </label>
            <input
              type="file"
              name="project-img"
              id="project-img"
              className="w-full"
              onChange={handleFileChange}
            />
          </div>

          {/* submit */}
          <div>
            <StyledBtn text="Submit" />
          </div>
        </form>
      </section>
    </main>
  );
};

export default page;
