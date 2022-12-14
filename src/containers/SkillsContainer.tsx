import React from "react";
import Heading from "../components/Heading";
import { SECTIONS, skills } from "../data/data";
import AnimateVisible from "../utils/AnimateVisible";

const SkillsContainer: React.FC = () => {
  return (
    <div className="flex flex-col w-full" id="skills">
      <br />
      <br />
      <Heading heading={SECTIONS[2]} />
      <div className="grid gap-6 mt-5 lg:grid-cols-3 justify-items-center auto-rows-fr">
        {skills.map(({ id, skill, level }) => (
          <AnimateVisible key={id}>
            <div
              className={`p-6 space-y-2 artboard phone card ${
                id % 2 === 0
                  ? `bg-secondary text-secondary-content`
                  : `bg-primary-focus text-primary-content`
              }`}
            >
              <h3 className="font-bold">{skill}</h3>
              <progress
                className={"progress progress-success"}
                value={level}
                max="100"
              />
            </div>
          </AnimateVisible>
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
