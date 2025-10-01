import _base from "../_base";
import type { AppContent } from "../AppContent";
import aboutpage from "./aboutpage";
import homepage from "./homepage";
import notfoundpage from "./notfoundpage";

const content: AppContent = {
    ..._base,
    homepage: { ..._base.homepage, ...homepage },
    aboutpage: { ..._base.aboutpage, ...aboutpage },
    notfoundpage: { ..._base.notfoundpage, ...notfoundpage }
}

export default content;