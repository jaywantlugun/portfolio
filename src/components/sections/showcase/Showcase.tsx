import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Showcase.css";
import type { HomepageContent } from "../../../contents/_base/homepage";
import { useContent } from "../../../hooks/useContent";

gsap.registerPlugin(ScrollTrigger);

export const Showcase: React.FC = () => {

  const {showcase} = useContent<HomepageContent>(); 

  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Animate each project card on scroll
      projectRefs.current.forEach((project, index) => {
        gsap.fromTo(
          project,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            delay: index * 0.3,
            scrollTrigger: {
              trigger: project,
              start: "top bottom-=100",
            },
          }
        );
      });

      // Fade in section
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.inOut" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" className="showcase-section" ref={sectionRef}>
      <div className="showcase-container">
        {/* LEFT PROJECT */}
        <div
          className="project-main"
          ref={(el) => {
                if (el) projectRefs.current[0] = el;
                }}
        >
          <div className="image-wrapper">
            <img src={showcase?.main.image} alt={showcase?.main.title} />
          </div>
          <div className="text-content">
            <h2>{showcase?.main.title}</h2>
            <p className="text-white-50 md:text-xl">{showcase?.main.description}</p>
          </div>
        </div>

        {/* RIGHT PROJECTS */}
        <div className="project-list">
          {showcase?.others.map((proj, i) => (
            <div
              key={proj.title}
              className="project-card"
              ref={(el) => {
                if (el) projectRefs.current[i + 1] = el;
                }}
            >
              <div className="image-wrapper" style={{ backgroundColor: proj.bg }}>
                <img src={proj.image} alt={proj.title} />
              </div>
              <h2>{proj.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
