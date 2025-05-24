import { NavLink } from "react-router-dom";
import "./Button.css";

interface ButtonProps {
  label: string;
  text: string;
  onClick?: () => void;
  to?: string;
  type?: "button" | "submit" | "reset"; // allow form submission
}

export const Button = ({ label, text, onClick, to, type = "button" }: ButtonProps) => {
  if (to) {
    return (
      <NavLink to={to} aria-label={label} className={({ isActive }) => (isActive ? "active" : "")}>
        {text}
      </NavLink>
    );
  }

  return (
    <button aria-label={label} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

