import type { Content } from "../../../types/Content";

export interface ShowcaseContent extends Content {
    main: { title: string; description: string; image: string; };
    others: { title: string; image: string; bg: string; }[];
}



const showcase : ShowcaseContent = {
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
};

export default showcase;
