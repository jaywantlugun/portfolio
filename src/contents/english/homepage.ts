import type { HomepageContent } from "../_base/homepage";

const homepage: Partial<HomepageContent> = {
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
