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
            <div className="hidden lg:block">
                <div className={`flex items-center justify-between w-full mb-8  ${styling}`}>
                    <div className="order-1 w-5/12" />
                    <div className="mr-2 ml-2 z-20 flex items-center order-1 w-30 h-8 bg-secondary-focus rounded-full shadow-xl">
                        <h1 className="mr-2 ml-2 mx-auto text-lg font-semibold text-secondary-content">
                            {start} - {end}
                        </h1>
                    </div>
                    <motion.div
                        transition={{ duration: 0.25 }}
                        whileHover={{ scale: 1.1 }}
                        className={
                            num % 2 === 0
                                ? 'order-1 w-5/12 shadow-2xl card lg:card-side bg-primary-focus text-primary-content'
                                : 'order-1 w-5/12 shadow-2xl card lg:card-side bg-secondary text-secondary-content'
                        }>
                        <div className="card-body">
                            <img src={logo} alt={company} className="w-20 max-h-20 max-w-20" />
                            <span className="py-0 font-bold card-subtitle card-side">
                                <div className="text-[20px]">{position}</div>
                                <div className="text-[14px]">{company}</div>
                            </span>
                            <p className="card-side">{description}</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className={`lg:hidden items-center justify-between w-full mb-8  ${styling}`}>
                <div className="" />
                <motion.div
                    transition={{ duration: 0.25 }}
                    whileHover={{ scale: 1.1 }}
                    className={
                        num % 2 === 0
                            ? 'shadow-2xl card lg:card-side bg-primary-focus text-primary-content'
                            : 'shadow-2xl card lg:card-side bg-secondary text-secondary-content'
                    }>
                    <div className="card-body">
                        <span className="py-0 font-bold card-subtitle card-side">
                            <h1 className="mx-auto text-lg font-semibold text-secondary-content">
                                {start} - {end}
                            </h1>
                            <img src={logo} alt={company} className="w-20 max-h-20 max-w-20" />
                            <div className="text-[20px]">{position}</div>
                            <div className="text-[14px]">{company}</div>
                        </span>
                        <p className="card-side">{description}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TimelineCard;
