import type { Content } from "../../../types/Content";

export interface NavBarContent extends Content {
    navLinks: { name: string; link: string }[];
    logoText: string;
    contactButtonText: string;
}

const navbar: NavBarContent = {
    navLinks: [
        { name: 'Work', link: '#work' },
        { name: 'Experience', link: '#experience' },
        { name: 'Skills', link: '#skills' },
        { name: 'Testimonials', link: '#testimonials' }
    ],
    logoText: "Jaywant",
    contactButtonText: "Contact Me"
};

export default navbar;