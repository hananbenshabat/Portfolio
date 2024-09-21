import React from 'react';
import { HeadingProps } from '../types/types';

const Heading: React.FC<HeadingProps> = ({ heading, id }) => {
    return (
        <div>
            <br />
            <br />
            <div className="grid center lg:grid-cols-2 auto-rows-fr">
                <div className="hidden pt-3 antialiased lg:flex" id={id} />
            </div>
            <div className="text-base-content font-bold pt-10 px-10 text-7xl text-center">{heading}</div>
            <br />
        </div>
    );
};

export default Heading;
