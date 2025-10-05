import type { Content } from "../../types/Content";
import { animatedCounter, type AnimatedCounterContent } from "./sections/animatedcounter";
import type { HeroContent } from "./sections/hero";
import hero from "./sections/hero";
import type { NavBarContent } from "./sections/navbar";
import navbar from "./sections/navbar";
import type { ShowcaseContent } from "./sections/showcase";
import showcase from "./sections/showcase";

export interface HomepageContent extends Content {
  navbar:NavBarContent,
  hero:HeroContent,
  animatedCounter: AnimatedCounterContent,
  showcase: ShowcaseContent
}

const homepage: HomepageContent = {
  navbar: navbar,
  hero: hero,
  animatedCounter: animatedCounter,
  showcase: showcase
};

export default homepage;
