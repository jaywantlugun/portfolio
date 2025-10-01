
import { createContext, useContext, type ReactNode } from "react";
import type { Content } from "../types/Content";

const ContentContext = createContext<Content | null>(null);

export const ContentProvider = ({value, children}: {value:any; children: ReactNode}) => {
    return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
};

export const useContent = <T extends Content>() => {
    const context = useContext(ContentContext);
    if (!context) throw new Error("useContent must be used within a ContentProvider");
  return context as T;
}