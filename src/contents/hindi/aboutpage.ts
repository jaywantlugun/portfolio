import type { AboutpageContent } from "../_base/aboutpage";

const aboutpage: Partial<AboutpageContent> = {
  featureTitle: "डायनेमिक API फीचर्स",
  title: "स्वागत है",
  subtitle: "हमारे ऐप का अन्वेषण करें",
  buttonText: "शुरू करें",
  featureListTitle: "उन्नत सुविधाएँ",
  featuresList: [
    "डायनेमिक API इंजेक्शन",
    "डेटा लाने के लिए Redux Query",
    "प्रत्येक पृष्ठ की भाषा का अलग-अलग इंजेक्शन",
    "अनुकूलित डेटा कैशिंग",
  ],
  users: {
    title: "उपयोगकर्ता",
    subtitle: "डायनेमिक API इंजेक्शन के साथ उपयोगकर्ता ला रहे हैं",
    viewAllButtonText: "सभी उपयोगकर्ता देखें",
  }
};

export default aboutpage;
