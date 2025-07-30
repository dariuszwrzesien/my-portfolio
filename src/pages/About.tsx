import { FC, useMemo, useState } from "react";
import AboutSidebar from "../components/AboutSidebar";
import { Outlet } from "react-router";

const About: FC = () => {
  return (
    <div className="flex h-full">
      <AboutSidebar />
      <Outlet />
    </div>
  );
};

export default About;
