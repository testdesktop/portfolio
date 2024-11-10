import {
  Backend_skill,
  Frontend_skill,
  Tools,
  Other_skill,
  frontend_data,
} from "@/constants";
import React from "react";
import SkillsDataProvider from "../sub/SkillsDataProvider";

const Skills = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20"
      id="skills"
      style={{ transform: "scale(0.9)" }}
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Skills & Expertise
      </h1>

      <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillsDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
