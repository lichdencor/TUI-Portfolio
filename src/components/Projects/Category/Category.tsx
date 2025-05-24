import { ProjectItem } from "../";

interface Project {
  name: string;
  url: string;
  img: string;
  alt: string;
  description: string;
}

interface CategoryProps {
  title: string;
  projects: Project[];
}

export const Category: React.FC<CategoryProps> = ({ title, projects }) => (
  <div className="category">
    <h3>&bull; {title}</h3>
    {projects.map((proj, index) => (
      <ProjectItem key={index} {...proj} />
    ))}
  </div>
);

