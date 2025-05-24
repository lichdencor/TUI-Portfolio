import { ProgressItem } from "../";
import "./OngoingProjects.css"

export const OngoingProjects: React.FC = () => (
  <div className="block ongoing-projects">
    <h2>Ongoing Projects</h2>
    <p>
      Currently I'm focusing on developing backend services and frontend for a web application. I'm also doing some IoT and System Administration on the side!
    </p>
    <ul>
      <ProgressItem title="Create a Web Portfolio" date="Q1 2025" value={100} />
      <ProgressItem title="ETL processes for Neo4J to SQL from Cryptocurrency APIs" date="Q2 2025" value={42} />
      <ProgressItem title="Toolkit to mount services on OpenRC" date="Q2 2025" value={20} />
      <ProgressItem title="Minimal Bench Multimeter (Linux + Arduino)" date="Q1 2026" value={5} />
    </ul>
  </div>
);

