import type { Content } from "../../types/Content";

export interface NotFoundpageContent extends Content {
    errorCode: string;
  title: string;
  subtitle: string;
  homeButtonText: string;
  backButtonText: string;
  needHelpText: string;
  contactSupportText: string;
}

const notfoundpage: NotFoundpageContent = {
    errorCode: "404",
    title: "Page Not Found",
    subtitle: "Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL or the page has been moved.",
    homeButtonText: "Go to Home",
    backButtonText: "Go Back",
    needHelpText: "Need Help?",
    contactSupportText: "Contact Support",
};

export default notfoundpage;
