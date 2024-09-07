import React from 'react';
import Contact from '../components/contact';
import Footer from '../components/footer';
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
            <Footer />
        </div>
    );
};

export default HomeContainer;
