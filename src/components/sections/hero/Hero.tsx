import Button from "../../common/Button";
import "./Hero.css";
import type { HomepageContent } from "../../../contents/_base/homepage";
import { useContent } from "../../../hooks/useContent";
import HeroText from "./HeroText";

// Main Hero Section
export function Hero() {
  const { words, introText, buttonText, heading1, heading2, heading3 } =
    useContent<HomepageContent>().hero;

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background" className="object-cover" />
      </div>

      <div className="hero-layout">
        {/* LEFT CONTENT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <HeroText
              heading1={heading1}
              heading2={heading2}
              heading3={heading3}
              words={words}
            />

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              {introText}
            </p>

            <Button
              id="hero-button"
              text={buttonText}
              className="md:w-80 md:h-16 w-60 h-12"
            />
          </div>
        </header>

        {/* RIGHT CONTENT (3D Model Placeholder) */}
        <figure>
          <div className="border-4 border-white-50 rounded-3xl overflow-hidden hero-3d-layout">
            {/* Future 3D Model goes here */}
          </div>
        </figure>
      </div>
    </section>
  );
}
