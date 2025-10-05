import type { Content } from "../../../types/Content";

export interface HeroContent extends Content {
    introText: string;
    buttonText: string;
    words: { text: string; imgPath: string }[];
    heading1: string;
    heading2: string;
    heading3: string;
}

const hero: HeroContent = {
    introText: "Hi, I'm Jaywant, a developer based in India with a passion for code.",
    buttonText: "See my Work",
    words: [
        {text: 'Ideas', imgPath: '/images/ideas.svg'},
        {text: 'Concepts', imgPath: '/images/concepts.svg'},
        {text: 'Designs', imgPath: '/images/designs.svg'},
        {text: 'Code', imgPath: '/images/code.svg'},
    ],
    heading1: "Shaping",
    heading2: "into Real Projects",
    heading3: "that Deliver Results",
};

export default hero;