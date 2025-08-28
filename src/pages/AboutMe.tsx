import AboutSidebar from "../components/AboutMeSidebar";
import { Outlet } from "react-router";

const AboutMe = () => {
  return (
    <div className="flex h-full z-1">
      <AboutSidebar />
      <Outlet />
    </div>
  );
};

export default AboutMe;
