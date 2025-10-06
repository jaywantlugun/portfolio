import Button from "../../common/Button";
import "./Hero.css";
import type { HomepageContent } from "../../../contents/_base/homepage";
import { useContent } from "../../../hooks/useContent";
import HeroText from "./HeroText";
import { lazy, Suspense, useEffect, useRef } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

// Main Hero Section
export function Hero() {
  const { words, introText, buttonText, heading1, heading2, heading3 } =
    useContent<HomepageContent>().hero;

    const modelRef = useRef<HTMLDivElement>(null);

  // Fade in when visible (Intersection Observer)
  useEffect(() => {
    const el = modelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
        <figure ref={modelRef}>
          <div className="overflow-hidden hero-3d-layout">
            <Suspense fallback={null}>
              <Spline scene="/spline/scene.splinecode" />
            </Suspense>
          </div>
        </figure>
      </div>
    </section>
  );
}
