export type TimelineProps = {
    id: number;
    company: string;
    position: string;
    logo: string;
    start: string;
    end: string;
    description: string;
};
type ImageType = {
    src: string;
    width: string;
    height: string;
};
export type SEOProps = {
    lang: string;
    url: string;
    title: string;
    metaDescription: string;
    keywords: string[];
    author: string;
    image: ImageType;
    theme: string;
};
export type MenuProps = {
    id: number;
    route: string;
    name: string;
};
export type TimelineCardProps = {
    styling: string;
    num: number;
} & TimelineProps;

export type DrawerProps = {
    menuShow: boolean;
};
export type HeadingProps = {
    heading?: string;
    id?: string;
    illustration?: unknown;
};

export type ContactSubmitProps = {
    type?: string;
    message?: string;
};

export type HeroProps = {
    greetingText: string;
    greetingDescription: string;
    buttonText: string;
};

export type NavbarProps = {
    menuShow: unknown;
    showMenu: (e: boolean) => void;
};
export type ProjectCardProps = {
    id: number;
    projectName: string;
    projectDescription: string;
    projectImageLogo: string;
    tech: string[];
    link: string;
    video: string;
};

export type SkillsProps = {
    id: number;
    skill: string;
    level: number;
};
