/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg';
import { ReactComponent as MenuIcon } from '../assets/icons/menu.svg';
import { ReactComponent as MoonIcon } from '../assets/icons/moon.svg';
import { ReactComponent as SunIcon } from '../assets/icons/sun.svg';
import { useTheme } from '../context/theme-provider';
import { GITHUB, LINKEDIN, MENU } from '../data/data';
import { NavbarProps } from '../types/types';
import GeneralFunctions from '../utils/general-functions';

const Navbar: React.FC<NavbarProps> = ({ menuShow, showMenu }) => {
    let listener = undefined;
    const { setTheme } = useTheme();
    const [themeState, setThemeState] = useState(true);
    const [scrollState, setScrollState] = useState(false);

    const highlightNavbar = () => {
        var scrolled = document.scrollingElement.scrollTop;

        if (scrolled >= 120) {
            if (!scrollState) {
                setScrollState(true);
            }
        } else {
            if (scrollState) {
                setScrollState(false);
            }
        }
    };

    useEffect(() => {
        setTheme(themeState ? 'winter' : 'night');
    }, [themeState]);

    useEffect(() => {
        listener = document.addEventListener('scroll', highlightNavbar);

        return () => {
            document.removeEventListener('scroll', listener);
        };
    }, [scrollState]);

    return (
        <div
            className={`${
                scrollState
                    ? `inset-x-0 top-0 z-50 w-full transition duration-300 ease-in-out border-b border-transparent bg-primary text-primary-content fixed navbar`
                    : `fixed inset-x-0 top-0 z-50 w-full transition duration-300 ease-in-out bg-transparent border-b border-transparent text-primary-content navbar`
            }`}>
            <div className="flex-1 navbar-start">
                <div className="btn btn-ghost rounded-btn" onClick={() => setThemeState(!themeState)}>
                    {themeState ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                </div>

                <div className="btn btn-ghost rounded-btn" onClick={() => GeneralFunctions.openInNewTab(LINKEDIN)}>
                    <LinkedInIcon className="w-5 h-5 mr-2" />
                </div>
                <div className="btn btn-ghost rounded-btn" onClick={() => GeneralFunctions.openInNewTab(GITHUB)}>
                    <GitHubIcon className="w-5 h-5 mr-2" />
                </div>
            </div>

            <div className="dropdown dropdown-left lg:hidden">
                <div tabIndex={0} className="btn btn-ghost rounded-btn">
                    <MenuIcon className="w-5 h-5" />
                </div>
                <ul
                    id="navbarMenu"
                    tabIndex={0}
                    className={`${
                        themeState
                            ? `p-2 shadow menu dropdown-content bg-base-100 text-neutral rounded-box`
                            : `p-2 shadow menu dropdown-content bg-base-100 text-primary rounded-box`
                    }`}>
                    {MENU.map(({ id, name, route }) => (
                        <Link
                            key={id}
                            activeClass="btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out text-bold"
                            to={route}
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={
                                'btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out'
                            }>
                            {name}
                        </Link>
                    ))}
                </ul>
            </div>

            <div className="flex-none hidden lg:block">
                <ul id="navbarMenu" className="menu horizontal">
                    {MENU.map(({ id, name, route }) => (
                        <Link
                            id={'navbarMenu' + id.toString()}
                            key={id}
                            activeClass="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-bold transition duration-300 ease-in-out"
                            to={route}
                            spy={true}
                            smooth={true}
                            duration={500}
                            className={
                                'btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out'
                            }>
                            {name}
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
