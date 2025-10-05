import { useEffect, useState } from "react";
import './NavBar.css';
import { useContent } from "../../../hooks/useContent";
import type { HomepageContent } from "../../../contents/_base/homepage";


export const NavBar = () => {

     const {navLinks , logoText, contactButtonText} = useContent<HomepageContent>().navbar;
     const [isScrolled, setIsScrolled] = useState(false);

     useEffect(() => {
         const handleScroll = () => {
             const scrollTop = window.scrollY;
             setIsScrolled(scrollTop > 10);
         };
            window.addEventListener('scroll', handleScroll);

            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    {logoText}
                </a>

                <nav className="desktop">
                    <ul>
                        {
                            navLinks.map(({link, name}) => (
                                <li key={name} className="group">
                                    <a href={link}>
                                        <span>{name}</span>
                                        <span className="underline"/>
                                    </a>
                                </li>
                            ))
                        } 
                    </ul>
                </nav>

                <a className="contact-btn group" href="#contact">
                    <div className="inner">
                        <span>{contactButtonText}</span>
                    </div>
                </a>

            </div>
        </header>
    )
}

export default NavBar;