import type { HomepageContent } from "../_base/homepage";

const homepage: Partial<HomepageContent> = {
  navbar: {
    navLinks: [
        { name: 'काम', link: '#work' },
        { name: 'अनुभव', link: '#experience' },
        { name: 'कौशल', link: '#skills' },
        { name: 'समीक्षाएँ', link: '#testimonials' }
    ],
    logoText: "जयवंत",
    contactButtonText: "संपर्क करें"
  },

  hero: {
    introText: "नमस्ते, मैं जयवंत हूँ, भारत में स्थित एक डेवलपर जो कोड के लिए जुनूनी है।",
    buttonText: "मेरा काम देखें",
    words: [
        {text: 'विचार', imgPath: '/images/ideas.svg'},
        {text: 'संकल्पना', imgPath: '/images/concepts.svg'},
        {text: 'डिज़ाइन', imgPath: '/images/designs.svg'},
        {text: 'कोड', imgPath: '/images/code.svg'},
    ],
    heading1: "रूप देना",
    heading2: "वास्तविक प्रोजेक्ट्स में",
    heading3: "जो परिणाम देते हैं",
  },

  animatedCounter: {
    counterItems: [
        {value: 10, suffix: "+", label: "अनुभव के वर्ष"},
        {value: 100, suffix: "+", label: "संतुष्ट ग्राहक"},
        {value: 108, suffix: "+", label: "पूरा किए गए प्रोजेक्ट्स"},
        {value: 90, suffix: "%", label: "ग्राहक प्रतिधारण दर"},
    ]
  },

  showcase: {
    main: {
      title: "Ryde के साथ आसान ऑन-डिमांड राइड्स",
      description:
        "React Native, Redux, Node.js, Express, और MongoDB का उपयोग करके बनाई गई एक ऐप जो सवारों को चालकों से जोड़ती है और सुविधाजनक परिवहन प्रदान करती है।",
      image: "/images/project1.png",
    },
    others: [
      {
        title: "लाइब्रेरी प्रबंधन प्लेटफ़ॉर्म",
        image: "/images/project2.png",
        bg: "#ffefdb",
      },
      {
        title: "YC Directory - एक स्टार्टअप शोकेस ऐप",
        image: "/images/project3.png",
        bg: "#ff7edb",
      },
    ],
  }
};

export default homepage;
