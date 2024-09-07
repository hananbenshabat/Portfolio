import React from 'react';
import Heading from '../components/heading';
import ProjectCard from '../components/project-card';
import { projects, SECTIONS } from '../data/data';
import AnimateVisible from '../utils/animate-visible';

const ProjectsContainer: React.FC = () => {
    return (
        <div className="flex flex-col w-full" id="projects">
            <br />
            <br />
            <Heading heading={SECTIONS[3]} />
            <div className="grid gap-6 mt-5 lg:grid-cols-3 justify-items-center md:grid-cols-1 auto-rows-fr">
                {projects.map(({ id, projectName, projectDescription, projectImageLogo, tech, link, video }) => (
                    <AnimateVisible key={id}>
                        <ProjectCard
                            id={id}
                            key={id}
                            projectDescription={projectDescription}
                            projectImageLogo={projectImageLogo}
                            projectName={projectName}
                            tech={tech}
                            link={link}
                            video={video}
                        />
                    </AnimateVisible>
                ))}
            </div>
        </div>
    );
};

export default ProjectsContainer;
