import type { Content } from "../../types/Content";

export interface HomepageContent extends Content {
  featureTitle: string;
  title: string;
  subtitle: string;
  buttonText: string;
  featureListTitle: string;
  featuresList: string[];
  counter: {
    title: string;
    subtitle: string;
    decreaseButtonText: string;
    increaseButtonText: string;
    customAmountLabel: string;
    addAmountButtonText: string;
  }
}

const homepage: HomepageContent = {
  featureTitle: "Dynamic reducer features",
  title: "Welcome",
  subtitle: "Explore our app",
  buttonText: "Get Started",
  featureListTitle: "Advanced Features",
  featuresList: [
    "Reducer injection for Counter",
    "Individual Page Language Injection",
    "Optimized Bundle (Only load counter slice)",
    "Theme Switching Capability",
  ],
  counter: {
    title: "Interactive Counter",
    subtitle: "A simple counter with dynamic reducer injection",
    decreaseButtonText: "Decrease",
    increaseButtonText: "Increase",
    customAmountLabel: "Custom Increment Value",
    addAmountButtonText: "Add",
  }
};

export default homepage;
