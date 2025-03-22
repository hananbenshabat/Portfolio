import { motion } from 'framer-motion';
import React from 'react';
import { TimelineCardProps } from '../types/types';

const TimelineCard: React.FC<TimelineCardProps> = ({
    num,
    company,
    end,
    start,
    description,
    position,
    logo,
    styling
}) => {
    return (
        <div>
            <div className={`flex items-center justify-between w-full mb-8 ${styling}`}>
                <div className="hidden lg:flex order-1 w-5/12" />
                <div className="hidden lg:flex mx-2 z-20 items-center order-1 h-8 bg-secondary-focus rounded-full shadow-xl">
                    <h1 className="px-2 text-lg font-semibold text-secondary-content">
                        {start} - {end}
                    </h1>
                </div>
                <motion.div
                    transition={{ duration: 0.25 }}
                    whileHover={{ scale: 1.1 }}
                    className="order-1 lg:w-5/12 shadow-2xl card lg:card-side text-primary-content from-info via-primary bg-secondary bg-linear-to-br">
                    <div className="card-body">
                        <h1 className="lg:hidden text-lg font-semibold text-secondary-content">
                            {start} - {end}
                        </h1>
                        <img src={logo} alt={company} className="w-20 max-h-20 max-w-20" />
                        <div className="card-subtitle card-side flex flex-col font-bold">
                            <span className="text-[20px]">{position}</span>
                            <span className="text-[14px]">{company}</span>
                        </div>
                        <p className="card-side">{description}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TimelineCard;
