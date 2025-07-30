import { FC } from "react";
import AboutSidebar from "../components/AboutSidebar";

const About: FC = () => {
  return (
    <div className="flex h-full">
      <AboutSidebar />
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p>This is the about page.</p>
    </div>
  );
};

export default About;
