import type { NotFoundpageContent } from "../_base/notfoundpage";

const notfoundpage: Partial<NotFoundpageContent> = {
    errorCode: "404",
    title: "Page Not Found",
    subtitle: "Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL or the page has been moved.",
    homeButtonText: "Go to Home",
    backButtonText: "Go Back",
    needHelpText: "Need Help?",
    contactSupportText: "Contact Support",
};

export default notfoundpage;