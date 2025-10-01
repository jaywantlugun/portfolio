import Counter from "./Counter";
import Main from "../../layout/Main";
import InfoSection from "../../shared/InfoSection";
import { useContent } from "../../../hooks/useContent";
import type { HomepageContent } from "../../../contents/_base/homepage";

export function Home() {

  const {featureTitle, title, subtitle, featureListTitle, featuresList, buttonText} = useContent<HomepageContent>();

  return (
    <Main>
      <InfoSection featureTitle={featureTitle} title={title} subtitle={subtitle} featureListTitle={featureListTitle} featuresList={featuresList} buttonText={buttonText}/>
      <Counter />
    </Main>
  );
}

export default Home;
