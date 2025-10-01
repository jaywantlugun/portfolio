import { lazy } from "react";
import type { AppContent } from "../contents/AppContent";

interface RouteConfig {
  path: string;
  element: React.LazyExoticComponent<() => React.ReactElement>;
  contentKey?: keyof AppContent;
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: lazy(() => import("../components/pages/home")),
    contentKey: "homepage",
  },
  {
    path: "/about",
    element: lazy(() => import("../components/pages/about")),
    contentKey: "aboutpage",
  },
  {
    path: "/*",
    element: lazy(() => import("../components/pages/notFound")),
    contentKey: "notfoundpage",
  }
];
