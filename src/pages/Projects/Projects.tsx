import { Layout, Background } from "../../components";
import { ProjectsOverview, OngoingProjects } from "../../components";

export const Projects = () => (
  <Layout>
    <Background />
    <div className="row">
      <ProjectsOverview />
      <OngoingProjects />
    </div>
  </Layout>
);

