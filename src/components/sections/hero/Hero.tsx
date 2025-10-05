// src/components/sections/Hero/Hero.tsx
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../../common/Button";
import "./Hero.css";
import type { HomepageContent } from "../../../contents/_base/homepage";
import { useContent } from "../../../hooks/useContent";

// Subcomponent: WordSlider
function WordSlider({ words }: { words: { text: string; imgPath: string }[] }) {
  return (
    <span className="slide">
      <span className="wrapper">
        {words.map(({ text, imgPath }) => (
          <span
            key={text}
            className="flex items-center md:gap-3 gap-1 pb-2"
            aria-label={text}
          >
            <img
              src={imgPath}
              alt={text}
              className="xl:size-12 md:size-10 size-7 md:p2 p-1 rounded-full bg-white-50"
            />
            <span>{text}</span>
          </span>
        ))}
      </span>
    </span>
  );
}

// Subcomponent: HeroText
function HeroText({
  heading1,
  heading2,
  heading3,
  words,
}: {
  heading1: string;
  heading2: string;
  heading3: string;
  words: { text: string; imgPath: string }[];
}) {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const elements = textRef.current?.querySelectorAll("h1");
      if (elements)
        gsap.fromTo(
          elements,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
        );
    },
    { scope: textRef }
  );

  return (
    <div ref={textRef} className="hero-text">
      <h1>
        {heading1}
        <WordSlider words={words} />
      </h1>
      <h1>{heading2}</h1>
      <h1>{heading3}</h1>
    </div>
  );
}

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
