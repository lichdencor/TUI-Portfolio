import {
  AboutMeSection,
  Accomplishments,
  Layout,
  Technologies,
  ProgressSection,
  Background
} from "../../components";

export const About = () => (
  <Layout>
    <Background />
    <div className="row">
      <AboutMeSection />
      <ProgressSection />
    </div>
    <div className="row">
      <Accomplishments />
    </div>
    <div className="row">
      <Technologies />
    </div>
  </Layout>
);

