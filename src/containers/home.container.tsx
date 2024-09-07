import React from 'react';
import Illustration from '../assets/icons/svg/footer.svg';
import Contact from '../components/contact';
import Hero from '../components/hero';
import { CTA_TEXT, NAME, TITLE } from '../data/data';
import ExperienceContainer from './experience.container';
import ProjectsContainer from './projects.container';
import SkillsContainer from './skills.container';

const HomeContainer: React.FC = () => {
    return (
        <div className="antialiased bg-primary-content text-primary">
            <Hero greetingText={NAME(' ')} greetingDescription={TITLE} buttonText={CTA_TEXT} />
            <ExperienceContainer />
            <SkillsContainer />
            <ProjectsContainer />
            <Contact />
            <img className="w-5 h-5 p-0 m-0 antialiased text-center" src={Illustration} />
        </div>
    );
};

export default HomeContainer;
