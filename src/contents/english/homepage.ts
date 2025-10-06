import type { HomepageContent } from "../_base/homepage";

const homepage: Partial<HomepageContent> = {
  navbar: {
    navLinks: [
      { name: "Work", link: "#work" },
      { name: "Experience", link: "#experience" },
      { name: "Skills", link: "#skills" },
      { name: "Testimonials", link: "#testimonials" },
    ],
    logoText: "Jaywant",
    contactButtonText: "Contact Me",
  },

  hero: {
    introText:
      "Hi, I'm Jaywant, a developer based in India with a passion for code.",
    buttonText: "See my Work",
    words: [
      { text: "Ideas", imgPath: "/images/ideas.svg" },
      { text: "Concepts", imgPath: "/images/concepts.svg" },
      { text: "Designs", imgPath: "/images/designs.svg" },
      { text: "Code", imgPath: "/images/code.svg" },
    ],
    heading1: "Shaping",
    heading2: "into Real Projects",
    heading3: "that Deliver Results",
  },

  animatedCounter: {
    counterItems: [
      { value: 10, suffix: "+", label: "Years of Experience" },
      { value: 100, suffix: "+", label: "Satisfied Clients" },
      { value: 108, suffix: "+", label: "Completed Projects" },
      { value: 90, suffix: "%", label: "Client Retention Rate" },
    ],
  },

  showcase: {
    main: {
      title: "On-Demand Rides Made Simple with Ryde",
      description:
        "An app built with React Native, Redux, Node.js, Express, and MongoDB that connects riders with drivers for convenient transportation.",
      image: "/images/project1.png",
    },
    others: [
      {
        title: "Library Management Platform",
        image: "/images/project2.png",
        bg: "#ffefdb",
      },
      {
        title: "YC Directory - A Startup Showcase App",
        image: "/images/project3.png",
        bg: "#ff7edb",
      },
    ],
  },
};

export default homepage;
