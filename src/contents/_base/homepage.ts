import type { Content } from "../../types/Content";
import type { HeroContent } from "./sections/hero";
import hero from "./sections/hero";
import type { NavBarContent } from "./sections/navbar";
import navbar from "./sections/navbar";

export interface HomepageContent extends Content {
  navbar:NavBarContent,
  hero:HeroContent

}

const homepage: HomepageContent = {
  navbar: navbar,
  hero: hero
};

export default homepage;
