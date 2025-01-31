import React from 'react';
import Heading from '../components/heading';
import TimelineCard from '../components/timeline-card';
import { EXPERIENCE, SECTIONS } from '../data/data';
import AnimateVisible from '../utils/animate-visible';
import GeneralFunctions from '../utils/general-functions';

const ExperienceContainer: React.FC = () => {
    return (
        <div id="resume" className="mx-3 lg:mx-12">
            <Heading heading={SECTIONS[1]} />
            <div className="relative h-full p-10 overflow-hidden wrap whitespace-pre-line">
                <div className="absolute h-full border border-accent border-2-2 opacity-20 left-1/2 hidden lg:block" />

                {GeneralFunctions.sortByDate(EXPERIENCE).map(
                    ({ id, company, position, description, end, start, logo }, i) => (
                        <AnimateVisible key={id}>
                            <TimelineCard
                                styling={i % 2 === 0 ? 'right-timeline' : 'flex-row-reverse left-timeline'}
                                id={id}
                                num={i}
                                logo={logo}
                                start={start}
                                end={end}
                                position={position}
                                description={description}
                                company={company}
                            />
                        </AnimateVisible>
                    )
                )}
            </div>
        </div>
    );
};

export default ExperienceContainer;
