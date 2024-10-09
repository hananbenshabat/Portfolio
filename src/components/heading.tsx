import React from 'react';
import { HeadingProps } from '../types/types';

const Heading: React.FC<HeadingProps> = ({ heading, id }) => {
    return (
        <div id={id} className="flex justify-center">
            <span className="text-base-content font-bold pt-40 pb-5 px-10 text-7xl text-center">{heading}</span>
        </div>
    );
};

export default Heading;
