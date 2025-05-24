import { Category } from "../";

export const ProjectsOverview: React.FC = () => (
  <div className="block project-categories">
    <h2>Projects Overview</h2>
    <div className="categories">
      <Category
        title="Web Development"
        projects={[
          {
            name: "Cultured Dino Academy",
            url: "https://github.com/lichdencor/Dino-Encyclopedia",
            img: "Dino-Culto.jpeg",
            alt: "Dino-culto",
            description: "An interactive Web application client powered by Typescript",
          },
          {
            name: "TUI portfolio",
            url: "https://github.com/lichdencor/web-nerdfolio",
            img: "web-portfolio.jpeg",
            alt: "TUI porfolio",
            description: "A reborn web portfolio with a TUI (Text User Interface) aesthetic. Now featuring a built-in terminal that simulates POSIX commands in Bash.",
          },
        ]}
      />
      <Category
        title="Automation"
        projects={[
          {
            name: "NoLimits Scraper",
            url: "https://github.com/lichdencor/NoLimits-Scraper",
            img: "nolimits-scraper.jpg",
            alt: "NoLimits Scraper",
            description: "Scrapes data from websites and public APIs through an ETL process into PostgreSQL.",
          },
        ]}
      />
    </div>
  </div>
);

