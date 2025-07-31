import AboutSidebar from "../components/AboutSidebar";
import { Outlet } from "react-router";

const About = () => {
  return (
    <div className="flex h-full">
      <AboutSidebar />
      <Outlet />
    </div>
  );
};

export default About;
