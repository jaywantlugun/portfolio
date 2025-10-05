import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";
import { routes } from "./config";
import { ContentProvider } from "../hooks/useContent";
import { useLanguage } from "../hooks/useLanguage";
import { resolveContent } from "../contents";
import { LoadingPage } from "../components/common/Spinner";
import NavBar from "../components/layout/navbar";

export default function AppRoutes() {
  const { language } = useLanguage();

  return (
    <BrowserRouter>
    <ContentLoader language={language} contentKey={"homepage"}>
      <NavBar />
    </ContentLoader>
      <Suspense fallback={<LoadingPage/>}>
        <Routes>
          {routes.map(({ path, element: Element, contentKey }) => {
            const elementWithContent = contentKey ? (
              <ContentLoader language={language} contentKey={contentKey}>
                <Element />
              </ContentLoader>
            ) : (
              <Element />
            );

            return <Route key={path} path={path} element={elementWithContent} />;
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

function ContentLoader({ language, contentKey, children }: any) {
  const [content, setContent] = useState<any | null>(null);

  useEffect(() => {
    let mounted = true;
    resolveContent(contentKey, language).then((c) => {
      if (mounted) setContent(c);
    });
    return () => {
      mounted = false;
    };
  }, [language, contentKey]);

  if (!content) return null; 

  return <ContentProvider value={content}>{children}</ContentProvider>;
}
