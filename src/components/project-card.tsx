import '@vime/core/themes/default.css';
import { DefaultUi, Player, Provider, Youtube } from '@vime/react';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { ReactComponent as LinkIcon } from '../assets/icons/link.svg';
import { ProjectCardProps } from '../types/types';
import GeneralFunctions from '../utils/general-functions';
import TapSidesToSeek from './tap-sides-to-seek';

const ProjectCard: React.FC<ProjectCardProps> = ({
    projectName,
    projectDescription,
    projectImageLogo,
    tech,
    link,
    video,
    id
}) => {
    const playerStyle = {
        '--vm-player-theme': `${id % 2 === 0 ? `hsl(var(--s))` : `hsl(var(--pf))`}`
    } as React.CSSProperties;

    const player = useRef<HTMLVmPlayerElement>(null);

    const onPlaybackReady = () => {
        // ...
    };

    return (
        <motion.div transition={{ duration: 0.25 }} key={id}>
            <div
                className={`mx-6 card ${
                    id % 2 === 0 ? `bg-secondary text-secondary-content` : `bg-primary-focus text-primary-content`
                }`}>
                <div className="sticky pr-6 pl-6 pt-6 w-full">
                    <Player
                        theme="dark"
                        style={playerStyle}
                        muted
                        playsinline
                        ref={player}
                        onVmPlaybackReady={onPlaybackReady}
                        currentPoster={projectImageLogo}
                        currentProvider={Provider.YouTube}
                        playbackQuality={'1080p'}>
                        <Youtube
                            videoId={video}
                            cookies={true}
                            poster={projectImageLogo}
                            showFullscreenControl={false}
                        />
                        <DefaultUi noCaptions noSettings>
                            <TapSidesToSeek />
                        </DefaultUi>
                    </Player>
                </div>
                <div className="max-w-md card-body">
                    <h2 className="card-title font-bold">
                        {projectName}
                        <div className="card-actions">
                            <button
                                className="btn btn-ghost rounded-full"
                                onClick={() => GeneralFunctions.openInNewTab(link)}>
                                <LinkIcon className="w-5 h-5" />
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
        </motion.div>
    );
};

export default ProjectCard;
