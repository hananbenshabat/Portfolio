import React from 'react';
import Heading from '../components/heading';
import TimelineCard from '../components/timeline-card';
import { EXPERIENCE, SECTIONS } from '../data/data';
import AnimateVisible from '../utils/animate-visible';

const ExperienceContainer: React.FC = () => {
    return (
        <div className="mx-3 lg:mx-12" id="resume">
            <br />
            <br />
            <Heading heading={SECTIONS[1]} />
            <div className="relative h-full p-10 overflow-hidden wrap">
                <div className="absolute h-full border border-accent border-2-2 border-opacity-20 left-1/2 hidden lg:block" />

                {EXPERIENCE.map(({ id, company, position, description, end, start, logo }) => (
                    <AnimateVisible key={id}>
                        {id % 2 === 0 ? (
                            <TimelineCard
                                styling="right-timeline"
                                id={id}
                                num={id}
                                logo={logo}
                                start={start}
                                end={end}
                                position={position}
                                description={description}
                                company={company}
                            />
                        ) : (
                            <TimelineCard
                                styling="flex-row-reverse  left-timeline"
                                id={id}
                                logo={logo}
                                num={id}
                                start={start}
                                end={end}
                                position={position}
                                description={description}
                                company={company}
                            />
                        )}
                    </AnimateVisible>
                ))}
            </div>
        </div>
    );
};

export default ExperienceContainer;
