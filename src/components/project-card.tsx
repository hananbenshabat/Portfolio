import React from 'react';
import { ReactSVG } from 'react-svg';
import LinkIcon from '../assets/icons/svg/link.svg';
import { ProjectCardProps } from '../types/types';
import GeneralFunctions from '../utils/general-functions';

const ProjectCard: React.FC<ProjectCardProps> = ({
    projectName,
    projectDescription,
    projectImageLogo,
    tech,
    link,
    video,
    id
}) => {
    return (
        <div
            className={`mx-6 card ${
                id % 2 === 0 ? `bg-secondary text-secondary-content` : `bg-primary-focus text-primary-content`
            }`}>
            {/* <VidstackPlayer projectName={projectName} projectImageLogo={projectImageLogo} video={video} /> */}
            <div className="max-w-md card-body">
                <h2 className="card-title font-bold">
                    {projectName}
                    <div className="card-actions">
                        <button
                            className="btn btn-ghost rounded-full"
                            onClick={() => GeneralFunctions.openInNewTab(link)}>
                            <ReactSVG className="w-5 h-5" src={LinkIcon} />
                        </button>
                    </div>
                </h2>
                <p>{projectDescription}</p>
                <div className="flex flex-wrap">
                    {tech.map((tech, techId = id) => (
                        <div key={techId++}>
                            <div
                                className={`mt-4 mr-2 badge ${
                                    id % 2 === 0
                                        ? `text-primary-content badge-primary`
                                        : `text-secondary-content badge-secondary`
                                }`}>
                                {tech}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
