import CV from '../assets/documents/PDF/hanan_ben_shabat_cv_en.pdf';
import ForecastIcon from '../assets/icons/4cast.svg';
import Education from '../assets/images/Afeka.jpg';
import PROJ_FPS_POSTER from '../assets/images/FPS-Poster.jpg';
import PROJ_INTEGRATIVE_POSTER from '../assets/images/Integrative-Poster.jpg';
import Military from '../assets/images/Military.jpg';
import PROJ_OPENGL_POSTER from '../assets/images/OpenGL-Poster.jpg';
import PROJ_POKERZONE_POSTER from '../assets/images/PokerZone-Poster.jpg';
import PROJ_RELATIONAL_DB_GUI_POSTER from '../assets/images/Relational-DB-GUI-Poster.jpg';
import Image from '../assets/images/Social.jpg';
import PROJ_ZOO_MANAGEMENT_POSTER from '../assets/images/Zoo-Management-Poster.jpg';
import { ImageType, MenuProps, ProjectCardProps, SkillsProps, TimelineProps } from '../types/types';
import GeneralFunctions from '../utils/general-functions';
import {
    DOB_DAY,
    DOB_MONTH,
    DOB_YEAR,
    EMAIL_DOMAIN,
    EMAIL_HOST,
    FIRST_NAME,
    HOST_URL,
    LAST_NAME,
    PHONE_COUNTRY_CODE,
    PHONE_NUMBER,
    PROJ_FPS_YOUTUBE,
    PROJ_INTEGRATIVE_YOUTUBE,
    PROJ_OPENGL_YOUTUBE,
    PROJ_POKERZONE_YOUTUBE,
    PROJ_RELATIONAL_DB_GUI_YOUTUBE,
    PROJ_ZOO_MANAGEMENT_YOUTUBE
} from './secret-data';

const LINKEDIN_URL = 'https://www.linkedin.com/in/';
const GITHUB_URL = 'https://github.com/';
const EMAIL_NAME = GeneralFunctions.stringifyArr(LAST_NAME) + FIRST_NAME;

export const NAME = (separator: string) =>
    FIRST_NAME + separator + GeneralFunctions.stringifyArrWithSeparator(LAST_NAME, separator);
export const DOB = new Date(DOB_YEAR, DOB_MONTH, DOB_DAY);
export const URL = 'https://' + NAME('-') + '-CV ' + HOST_URL;
export const CV_URL = CV;
export const PHONE = '+' + PHONE_COUNTRY_CODE + ' 0' + PHONE_NUMBER;
export const WHATSAPP_URL = 'https://wa.me/';
export const WHATSAPP = WHATSAPP_URL + PHONE_COUNTRY_CODE + PHONE_NUMBER;
export const EMAIL_URL = EMAIL_NAME + '@' + EMAIL_HOST + '.' + EMAIL_DOMAIN;
export const EMAIL = 'mailto:' + EMAIL_URL;
export const LINKEDIN = LINKEDIN_URL + NAME('-');
export const GITHUB = GITHUB_URL + NAME('');
const GITHUB_REPO = (repoName: string) => GITHUB + '/' + repoName;
export const CTA_TEXT = 'Download my CV';
export const SECTIONS = ['Home', 'Resume', 'Skills', 'Projects', 'Contact'];
export const MENU: MenuProps[] = [
    { id: 1, route: 'home', name: SECTIONS[0] },
    { id: 2, route: 'resume', name: SECTIONS[1] },
    { id: 3, route: 'skills', name: SECTIONS[2] },
    { id: 4, route: 'projects', name: SECTIONS[3] },
    { id: 5, route: 'contact', name: SECTIONS[4] }
];

export const TITLE = 'Full-Stack Engineer';

export { CITY, COUNTRY, EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from './secret-data';

export const EXPERIENCE: TimelineProps[] = [
    {
        id: 1,
        company: 'Hatal, Israel Defense Forces',
        position: 'Full-Stack Developer',
        logo: Military,
        start: '2015',
        end: '2018',
        description: 'Developed client side in Angular and server side in Microsoft SQL Server and .NET.'
    },
    {
        id: 2,
        company: 'Afeka College of Engineering',
        position: 'B.Sc. Software Engineering',
        logo: Education,
        start: '2018',
        end: '2022',
        description: 'Major in Software and Information Technology.'
    },
    {
        id: 3,
        company: '4cast, Malam Team',
        position: 'Full-Stack Engineer',
        logo: ForecastIcon,
        start: '02/2023',
        end: GeneralFunctions.getCurrentDate(),
        description:
            'Developed decision intelligence platform. Client side in Angular and server side in PostgreSQL and .NET.'
    }
];

export const KEYWORDS = ['Developer', 'Software Engineer', 'Hanan Ben Shabat', 'Portfolio'];

export const IMAGE: ImageType = {
    src: Image,
    height: '600',
    width: '314'
};

export const skills: SkillsProps[] = [
    { id: 1, skill: 'Unity', level: 98 },
    { id: 2, skill: 'C', level: 85 },
    { id: 3, skill: 'C++', level: 85 },
    { id: 4, skill: 'C#', level: 90 },
    { id: 5, skill: 'Python', level: 88 },
    { id: 6, skill: 'Java', level: 85 },
    { id: 7, skill: 'HTML, CSS, Tailwind CSS, daisyUI', level: 97 },
    { id: 8, skill: 'Typescript, Javascript, jQuery', level: 93 },
    { id: 9, skill: 'NodeJS, Express, Mongoose', level: 90 },
    { id: 10, skill: 'React, React WebGL, Redux', level: 80 },
    { id: 11, skill: 'Angular', level: 95 },
    { id: 12, skill: 'MongoDB, CosmosDB, OracleDB', level: 90 },
    { id: 13, skill: 'Selenium, Maven', level: 95 },
    { id: 14, skill: 'Spring, .NET', level: 85 },
    { id: 15, skill: 'Git, GitHub, Bitbucket', level: 85 },
    { id: 16, skill: 'RESTful API', level: 90 },
    { id: 17, skill: 'Azure, Docker', level: 60 },
    { id: 18, skill: 'OpenGL', level: 85 }
];

export const projects: ProjectCardProps[] = [
    {
        id: 1,
        projectName: 'PokerZone',
        projectDescription:
            'Sessions based Authentication app that uses cookies. Upon authenticated, displays a 3D Poker game with a character creator and a facial expression system. The user and his player data are saved in the cloud.',
        projectImageLogo: PROJ_POKERZONE_POSTER,
        link: GITHUB_REPO('PokerZone'),
        video: PROJ_POKERZONE_YOUTUBE,
        tech: ['C#', 'Unity', 'WebGL', 'React', 'React WebGL', 'Redux', 'NodeJS', 'MongoDB']
    },
    {
        id: 2,
        projectName: 'FPS',
        projectDescription:
            '3D First Person Shooter game between two teams of two players, where the player is in one of them.',
        projectImageLogo: PROJ_FPS_POSTER,
        link: GITHUB_REPO('Unity-GameDevelopment-FinalProject'),
        video: PROJ_FPS_YOUTUBE,
        tech: ['C#', 'Unity']
    },
    {
        id: 3,
        projectName: 'Integrative Software Engineering',
        projectDescription:
            'I was the Database Administrator in a team of 5 software engineers developing client/server system with our own API. The final product is a web app that helps the user create a watch list of movies/tv series they intend to watch, rate and view ratings of movies/tv series from other users.',
        projectImageLogo: PROJ_INTEGRATIVE_POSTER,
        link: GITHUB_REPO('Integrative-Project'),
        video: PROJ_INTEGRATIVE_YOUTUBE,
        tech: ['Java', 'Spring', 'React', 'NodeJS', 'MongoDB']
    },
    {
        id: 4,
        projectName: 'Relational DB GUI',
        projectDescription:
            'Graphical User Interface for inserting and displaying SQL queries, an explanation of their output and viewing their output from Chinook Data Base.',
        projectImageLogo: PROJ_RELATIONAL_DB_GUI_POSTER,
        link: GITHUB_REPO('Relational-DB-GUI'),
        video: PROJ_RELATIONAL_DB_GUI_YOUTUBE,
        tech: ['Python', 'SQLite', 'Tkinter', 'pandas']
    },
    {
        id: 5,
        projectName: '3D Fundamentals',
        projectDescription:
            'Different camera view options over a detailed 3D map: Hills, River, Bridge, and a train moving on rails.',
        projectImageLogo: PROJ_OPENGL_POSTER,
        link: GITHUB_REPO('OpenGL-Project'),
        video: PROJ_OPENGL_YOUTUBE,
        tech: ['C++', 'OpenGL']
    },
    {
        id: 6,
        projectName: 'Zoo Management',
        projectDescription: 'Efficient, well-designed, object-oriented zoo management system.',
        projectImageLogo: PROJ_ZOO_MANAGEMENT_POSTER,
        link: GITHUB_REPO('Zoo-Management-System'),
        video: PROJ_ZOO_MANAGEMENT_YOUTUBE,
        tech: ['C++']
    }
];
