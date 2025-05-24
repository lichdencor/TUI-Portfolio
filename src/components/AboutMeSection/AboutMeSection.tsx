import "./AboutMeSection.css"

const Particular = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="particular">
      <h3>{label}</h3> <p>{value}</p>
    </div>
  );
}

export const AboutMeSection = () => {
  return (
    <div className="block about-me-container">
      <h2>About Me</h2>
      <div className="about-me-top">
        <div className="image-container">
          <img src="/images/profile.jpg" alt="Profile Picture" />
        </div>
        <div className="about-me-particulars">
          <Particular label="Age:" value="23" />
          <Particular label="Location:" value="Buenos Aires, Argentina" />
          <Particular label="Email:" value="lucasignaciodencor@gmail.com" />
          <div className="particular social-links-container">
            <h3>Social Links:</h3>
            <ul className="social-links">
              <li>
                <a href="https://github.com/lichdencor" target="_blank">
                  <img src="/images/github.svg" alt="GitHub" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lichdencor/" target="_blank">
                  <img src="/images/linkedin.svg" alt="LinkedIn" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-me-description">
        <p>Hi there! I'm a student at Universidad de Belgrano.</p>
        <p>
          My passion lies in networking and building applications for business,
          and I’m always looking for new challenges to solve.
        </p>
        <p>
          When I’m not coding, you can find me either gaming or training,
          staying sharp both mentally and physically.
        </p>
        <p>
          Right now, I’m expanding my skill set by exploring automation
          and learning about web protocols, taking my technical knowledge to the next level.
        </p>
      </div>
    </div>
  );
}
