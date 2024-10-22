import CV from '../assets/documents/pdf/hanan_ben_shabat_cv_en.pdf';
import Education from '../assets/icons/jpg/afeka.jpg';
import PROJ_FPS_POSTER from '../assets/icons/jpg/fps-poster.jpg';
import PROJ_INTEGRATIVE_POSTER from '../assets/icons/jpg/integrative-poster.jpg';
import Military from '../assets/icons/jpg/military.jpg';
import PROJ_OPENGL_POSTER from '../assets/icons/jpg/opengl-poster.jpg';
import PROJ_POKERZONE_POSTER from '../assets/icons/jpg/pokerzone-poster.jpg';
import PROJ_RELATIONAL_DB_GUI_POSTER from '../assets/icons/jpg/relational-db-gui-poster.jpg';
import Image from '../assets/icons/jpg/social.jpg';
import PROJ_ZOO_MANAGEMENT_POSTER from '../assets/icons/jpg/zoo-management-poster.jpg';
import ForecastIcon from '../assets/icons/svg/4cast.svg';
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
    { route: 'home', name: SECTIONS[0] },
    { route: 'resume', name: SECTIONS[1] },
    { route: 'skills', name: SECTIONS[2] },
    { route: 'projects', name: SECTIONS[3] },
    { route: 'contact', name: SECTIONS[4] }
].map((category, index) => ({ id: index + 1, ...category }));

export const TITLE = 'Software Engineer';

export { EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from './secret-data';

export const EXPERIENCE: TimelineProps[] = [
    {
        company: 'Hatal, Israel Defense Forces',
        position: 'Full-Stack Developer',
        logo: Military,
        start: '2015',
        end: '2018',
        description: 'Developed client side in Angular and server side in Microsoft SQL Server and .NET.'
    },
    {
        company: 'Afeka College of Engineering',
        position: 'B.Sc. Software Engineering',
        logo: Education,
        start: '2018',
        end: '2022',
        description: 'Major in Software and Information Technology.'
    },
    {
        company: '4cast, Malam Team',
        position: 'Full-Stack Engineer',
        logo: ForecastIcon,
        start: '02/2023',
        end: GeneralFunctions.getCurrentDate(),
        description:
            'Developed decision intelligence platform. Client side in Angular and server side in PostgreSQL and .NET.'
    }
].map((experience, index) => ({ id: index + 1, ...experience }));

export const KEYWORDS = ['Developer', 'Software Engineer', 'Hanan Ben Shabat', 'Portfolio'];

export const IMAGE: ImageType = { src: Image, height: '600', width: '314' };

export const skills: SkillsProps[] = [
    { skill: 'Unity', level: 90 },
    { skill: 'C#', level: 90 },
    { skill: 'Python', level: 70 },
    { skill: 'Java', level: 80 },
    { skill: 'HTML, CSS, SCSS', level: 97 },
    { skill: 'Bootstrap, Tailwind CSS', level: 97 },
    { skill: 'Angular, PrimeNG', level: 100 },
    { skill: 'Typescript, Javascript', level: 99 },
    { skill: 'NodeJS, Express, Mongoose', level: 90 },
    { skill: 'React, React WebGL, Redux', level: 80 },
    { skill: 'MongoDB, CosmosDB, OracleDB', level: 70 },
    { skill: 'Selenium, Maven', level: 75 },
    { skill: 'Spring, .NET, .NET Core', level: 90 },
    { skill: 'Git, GitHub, Bitbucket, Azure', level: 95 },
    { skill: 'RESTful API', level: 93 }
].map((skill, index) => ({ id: index + 1, ...skill }));

export const projects: ProjectCardProps[] = [
    {
        projectName: 'PokerZone',
        projectDescription:
            'Sessions based Authentication app that uses cookies. Upon authenticated, displays a 3D Poker game with a character creator and a facial expression system. The user and his player data are saved in the cloud.',
        projectImageLogo: PROJ_POKERZONE_POSTER,
        link: GITHUB_REPO('PokerZone'),
        video: PROJ_POKERZONE_YOUTUBE,
        tech: ['C#', 'Unity', 'WebGL', 'React', 'React WebGL', 'Redux', 'NodeJS', 'MongoDB']
    },
    {
        projectName: 'FPS',
        projectDescription:
            '3D First Person Shooter game between two teams of two players, where the player is in one of them.',
        projectImageLogo: PROJ_FPS_POSTER,
        link: GITHUB_REPO('Unity-GameDevelopment-FinalProject'),
        video: PROJ_FPS_YOUTUBE,
        tech: ['C#', 'Unity']
    },
    {
        projectName: 'Integrative Software Engineering',
        projectDescription:
            'I was the Database Administrator in a team of 5 software engineers developing client/server system with our own API. The final product is a web app that helps the user create a watch list of movies/tv series they intend to watch, rate and view ratings of movies/tv series from other users.',
        projectImageLogo: PROJ_INTEGRATIVE_POSTER,
        link: GITHUB_REPO('Integrative-Project'),
        video: PROJ_INTEGRATIVE_YOUTUBE,
        tech: ['Java', 'Spring', 'React', 'NodeJS', 'MongoDB']
    },
    {
        projectName: 'Relational DB GUI',
        projectDescription:
            'Graphical User Interface for inserting and displaying SQL queries, an explanation of their output and viewing their output from Chinook Data Base.',
        projectImageLogo: PROJ_RELATIONAL_DB_GUI_POSTER,
        link: GITHUB_REPO('Relational-DB-GUI'),
        video: PROJ_RELATIONAL_DB_GUI_YOUTUBE,
        tech: ['Python', 'SQLite', 'Tkinter', 'pandas']
    },
    {
        projectName: '3D Fundamentals',
        projectDescription:
            'Different camera view options over a detailed 3D map: Hills, River, Bridge, and a train moving on rails.',
        projectImageLogo: PROJ_OPENGL_POSTER,
        link: GITHUB_REPO('OpenGL-Project'),
        video: PROJ_OPENGL_YOUTUBE,
        tech: ['C++', 'OpenGL']
    },
    {
        projectName: 'Zoo Management',
        projectDescription: 'Efficient, well-designed, object-oriented zoo management system.',
        projectImageLogo: PROJ_ZOO_MANAGEMENT_POSTER,
        link: GITHUB_REPO('Zoo-Management-System'),
        video: PROJ_ZOO_MANAGEMENT_YOUTUBE,
        tech: ['C++']
    }
].map((project, index) => ({ id: index + 1, ...project }));
