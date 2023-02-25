import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import { CTA_TEXT, TITLE, NAME } from "../data/data";
import ExperienceContainer from "./ExperienceContainer";
import ProjectsContainer from "./ProjectsContainer";
import SkillsContainer from "./SkillsContainer";

const HomeContainer: React.FC = () => {
  return (
    <div className="antialiased bg-primary-content text-primary">
      <Hero
        greetingText={NAME(" ")}
        greetingDescription={TITLE}
        buttonText={CTA_TEXT}
      />
      <ExperienceContainer />
      <SkillsContainer />
      <ProjectsContainer />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomeContainer;
