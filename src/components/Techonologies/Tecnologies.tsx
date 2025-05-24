import "./Technologies.css"

export const Technologies = () => {
  const categories = {
    Languages: ["typescript", "bash", "c", "css", "java", "php"],
    Frameworks: ["spring", "react"],
    Tools: [
      "linux",
      "postgresql",
      "git",
      "github",
      "docker",
      "azure-devops",
      "raspberry-pi",
      "trello",
      "figma"
    ],
    Workflow: ["neovim", "voidlinux", "jira"],
  };

  const imagePath = (name: string) => `/images/${name}.svg`;

  const techLinks: Record<string, string> = {
    bash: "https://www.gnu.org/software/bash/",
    c: "https://en.cppreference.com/w/c/language",
    typescript: "https://www.typescriptlang.org/",
    react: "https://es.react.dev/",
    php: "https://www.php.net/",
    spring: "https://spring.io/",
    linux: "https://www.kernel.org/",
    postgresql: "https://www.postgresql.org/",
    git: "https://git-scm.com/",
    github: "https://github.com/",
    docker: "https://www.docker.com/",
    "azure-devops": "https://azure.microsoft.com/en-us/services/devops/",
    "raspberry-pi": "https://www.raspberrypi.org/",
    trello: "https://trello.com/",
    figma: "https://www.figma.com/",
    neovim: "https://neovim.io/",
    voidlinux: "https://voidlinux.org/",
    jira: "https://www.atlassian.com/software/jira",
    css: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    java: "https://www.oracle.com/java/",
  };

  return (
    <div className="block technologies-container">
      <h2>Technologies</h2>
      <div className="tech-section">
        <div className="skills-row">
          {Object.entries(categories).map(([category, techs]) => (
            <div key={category} className="row">
              <h3>{category}</h3>
              <div className="tech-icon-row">
                {techs.map((tech) => (
                  <a
                    key={tech}
                    href={techLinks[tech] || `https://${tech.replace(/-/g, "")}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tech-item"
                  >
                    <img
                      src={imagePath(tech)}
                      alt={tech.charAt(0).toUpperCase() + tech.slice(1)}
                      className="skill-logo"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

