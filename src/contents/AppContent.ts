import type { AboutpageContent } from "./_base/aboutpage";
import type { HomepageContent } from "./_base/homepage";
import type { NotFoundpageContent } from "./_base/notfoundpage";

export interface AppContent {
    homepage: HomepageContent,
    aboutpage: AboutpageContent,
    notfoundpage: NotFoundpageContent
}