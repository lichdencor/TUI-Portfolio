import { useEffect } from "react";
import { Nav } from "..";
import "./Layout.css"

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  showNav?: boolean;
  modal?: React.ReactNode;
}

const NavOptions = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];


export const Layout = ({ children, title, className = "", showNav = true, modal }: LayoutProps) => {
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  return (
    <div className={`app-layout ${className}`}>
      {showNav && <Nav options={NavOptions} />}
      <main className="tui">
        <div className="tui-main">{children}</div>
      </main>
      {modal}
    </div>
  );
};

