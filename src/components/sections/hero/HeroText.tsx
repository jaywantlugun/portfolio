import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import WordSlider from "./WordSlider";

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

export default HeroText;