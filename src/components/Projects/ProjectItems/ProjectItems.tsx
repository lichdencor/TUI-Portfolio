import "./ProjectItems.css"

interface ProjectItemProps {
  name: string;
  url: string;
  img: string;
  alt: string;
  description: string;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ name, url, img, alt, description }) => (
  <>
    <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
    <div className="project-img">
      <img src={`/images/${img}`} alt={alt} />
    </div>
    <p>{description}</p>
  </>
);

