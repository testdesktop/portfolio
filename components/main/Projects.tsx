"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/project1.png"
          title="Food Delivery Website"
          description="React, TailwindCSS, Python, Django, Django REST framework"
          link="https://foodferry.vercel.app/"
        />
        <ProjectCard
          src="/project2.png"
          title="E-commerce Website"
          description="React, React-Router, Redux-toolkit, Redux-Thunk, React-Toastify, Axios, TailwindCSS"
          link="https://redux-ecommerce2023.netlify.app/"
        />
        <ProjectCard
          src="/project33.png"
          title="Blood Donation Website"
          description="React, TailwindCSS, Python, Django, Django REST framework"
          link="https://safe-blood.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
