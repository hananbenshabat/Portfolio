import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-scroll';
import { ReactSVG } from 'react-svg';
import ArrowCircleDownIcon from '../assets/icons/svg/download.svg';
import GitHubIcon from '../assets/icons/svg/github.svg';
import LinkedInIcon from '../assets/icons/svg/linkedin.svg';
import { CV_URL, GITHUB, LINKEDIN } from '../data/data';
import '../styles/mouse.css';
import { HeroProps } from '../types/types';
import GeneralFunctions from '../utils/general-functions';

const Hero: React.FC<HeroProps> = ({ greetingText, greetingDescription, buttonText }) => {
    return (
        <div
            className="relative min-h-screen pt-0 mt-0 antialiased hero bg-gradient-to-br from-primary to-secondary text-primary-content"
            id="home">
            <div className="moving-mouse-holder">
                <Link
                    to={'resume'}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="absolute left-1/2 bottom-12 hidden lg:block transition rounded-full cursor-pointer">
                    <div className="relative border-2 rounded-full w-6 h-10 border-primary-content right-3">
                        <div className="mouse-button bg-primary-content">&nbsp;</div>
                    </div>
                </Link>
            </div>

            <div className="text-justify hero-content">
                <div className="max-w-lg ml-10">
                    <motion.div animate={{ scale: [0.5, 1] }} transition={{ duration: 0.5 }}>
                        <div className="hidden lg:block">
                            <h1 className="mb-5 text-5xl font-bold tracking-tighter">{greetingText}</h1>
                            <p className="mb-5">{greetingDescription}</p>
                            <a
                                className="transition rounded-full cursor-pointer btn btn-primary mr-5"
                                href={CV_URL}
                                download="hanan-ben-shabat-cv.pdf">
                                <ReactSVG className="w-5 h-5" src={ArrowCircleDownIcon} />
                                {buttonText}
                            </a>
                            <button
                                className="transition rounded-full cursor-pointer btn btn-primary ml-2 mr-5"
                                onClick={() => GeneralFunctions.openInNewTab(LINKEDIN)}>
                                <ReactSVG className="w-5 h-5" src={LinkedInIcon} />
                            </button>
                            <button
                                className="transition rounded-full cursor-pointer btn btn-primary"
                                onClick={() => GeneralFunctions.openInNewTab(GITHUB)}>
                                <ReactSVG className="w-5 h-5" src={GitHubIcon} />
                            </button>
                        </div>
                        <div className="lg:hidden">
                            <h1 className="mb-5 text-4xl font-bold tracking-tighter">{greetingText}</h1>
                            <p className="mb-5">
                                <span className="text-xl">{greetingDescription}</span>
                            </p>
                            <a
                                className="transition rounded-full cursor-pointer btn btn-primary mr-2"
                                href={CV_URL}
                                download="hanan-ben-shabat-cv.pdf">
                                <ReactSVG className="w-5 h-5" src={ArrowCircleDownIcon} />
                                {buttonText}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
