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
    element: lazy(() => import("../pages/home")),
    contentKey: "homepage",
  },
  {
    path: "/*",
    element: lazy(() => import("../pages/notFound")),
    contentKey: "notfoundpage",
  },
];
