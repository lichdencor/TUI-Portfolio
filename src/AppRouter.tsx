import { Route } from "react-router-dom";
import { About, Contact, Home, Projects } from "./pages";
import { RoutesWithNotFound } from "./components";


export const AppRouter = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contact />} />
    </RoutesWithNotFound>
  );
};

