import type { AboutpageContent } from "../_base/aboutpage";

const aboutpage: Partial<AboutpageContent> = {
  featureTitle: "Dynamic API features",
  title: "Welcome",
  subtitle: "Explore our app",
  buttonText: "Re-Fetch",
  featureListTitle: "Advanced Features",
  featuresList: [
    "Dynamic API Injection",
    "Redux Query for Data Fetching",
    "Individual Page Language Injection",
    "Optimised Data Caching",
  ],
  users: {
    title: "Users",
    subtitle: "Fetching users with dynamic API injection",
    viewAllButtonText: "View All users",
  }
};

export default aboutpage;
