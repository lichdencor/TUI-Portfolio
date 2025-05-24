import { Layout } from "../../components";
import { Background, Description, PersonalInfo, Terminal, News } from "../../components";

export const Home = () => (
  <Layout>
    <Background />
    <div className="row">
      <Description />
      <PersonalInfo />
    </div>
    <div className="row">
      <Terminal />
    </div>
    <div className="row">
      <News />
    </div>
  </Layout>
);

