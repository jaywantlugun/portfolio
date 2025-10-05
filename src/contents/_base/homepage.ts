import type { Content } from "../../types/Content";
import type { NavBarContent } from "./sections/navbar";
import navbar from "./sections/navbar";

export interface HomepageContent extends Content {
  navbar:NavBarContent
}

const homepage: HomepageContent = {
  navbar: navbar
};

export default homepage;
