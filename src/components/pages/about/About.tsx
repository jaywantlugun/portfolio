import { useGetUsersQuery } from "../../../api/userApi";
import type { AboutpageContent } from "../../../contents/_base/aboutpage";
import { useContent } from "../../../hooks/useContent";
import Main from "../../layout/Main";
import InfoSection from "../../shared/InfoSection";
import UsersSection from "./UsersSection";

export function About() {

  const {featureTitle, title, subtitle, featureListTitle, featuresList, buttonText} = useContent<AboutpageContent>();
  const { refetch } = useGetUsersQuery();

  return (
    <Main>
      <InfoSection featureTitle={featureTitle} title={title} subtitle={subtitle} featureListTitle={featureListTitle} featuresList={featuresList} buttonText={buttonText} buttonOnClick={refetch}/>
      <UsersSection />
    </Main>
  );
}

export default About;
