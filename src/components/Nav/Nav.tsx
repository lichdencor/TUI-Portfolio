import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";  // React Router example
import { Button } from "..";
import "./Nav.css";

interface NavOption {
  label: string;
  path: string;
}

interface NavProps {
  options: NavOption[];
}

export const Nav = ({ options }: NavProps) => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Get current path from react-router
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isMobile = window.innerWidth <= 480;

      if (isMobile) {
        setHidden(false); // Always visible on mobile
      } else {
        setHidden(currentScrollY > lastScrollY);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`tui-navbar${hidden ? " hidden" : ""}`}>
      <ul>
        {options.map(({ label, path }) => (
          <li key={path} className={path === currentPath ? "selected" : ""}>
            <Button label={label} text={label} to={path} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

