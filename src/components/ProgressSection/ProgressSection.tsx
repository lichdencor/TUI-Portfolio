import { useEffect } from "react";
import "./ProgressSection.css"

export const ProgressSection = () => {
  const sections = [
    {
      title: "Technical Skills",
      skills: [
        { label: "Data Structures", value: 62 },
        { label: "Automation", value: 70 },
        { label: "Debugging", value: 80 },
        { label: "Problem Solving", value: 90 },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { label: "Communication", value: 80 },
        { label: "Teamwork", value: 93 },
      ],
    },
    {
      title: "Languages",
      skills: [
        { label: "English", value: 84 },
        { label: "Spanish", value: 100 },
      ],
    },
  ];

  useEffect(() => {
    const animateProgressBar = (barId, value, duration = 1000) => {
      const bar = document.getElementById(barId);
      if (bar) {
        const innerBar = bar.querySelector("div");
        let currentWidth = 0;
        const interval = setInterval(() => {
          currentWidth += 1;
          if (innerBar) {
            innerBar.style.width = `${currentWidth}%`;
          }
          if (currentWidth >= value) {
            clearInterval(interval);
          }
        }, duration / value);
      }
    };

    sections.forEach((section) => {
      section.skills.forEach((skill) => {
        const id = `bar-${section.title}-${skill.label}`.replace(/\s+/g, "-").toLowerCase();
        animateProgressBar(id, skill.value, 2000);
      });
    });
  }, []);

  return (
    <div className="block progress-ability-container">
      <h2>Progress Ability</h2>
      <div className="progress-bar-section">
        {sections.map((section) => (
          <div key={section.title} className="skill-category">
            <h3>{section.title}</h3>
            {section.skills.map((skill) => {
              const barId = `bar-${section.title}-${skill.label}`.replace(/\s+/g, "-").toLowerCase();
              return (
                <div className="skill" key={skill.label}>
                  <label>{skill.label}</label>
                  <div className="progress-bar" id={barId} data-value={skill.value}>
                    <div></div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

