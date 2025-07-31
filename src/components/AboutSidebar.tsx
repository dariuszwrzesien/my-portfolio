import { RiArrowDropDownFill, RiFileCodeFill } from "@remixicon/react";
import { useLocation } from "react-router";
import Paths from "../Paths";
import AboutSidebarLink from "./AboutSidebarLink";
import AboutSidebarSublink from "./AboutSidebarSublink";

const AboutSidebar = () => {
  const location = useLocation();
  return (
    <aside className="custom-sidebar-width h-full border-r border-stroke">
      <div className="flex items-center p-2 border-b border-stroke text-slate-50">
        <RiArrowDropDownFill className="w-11" />
        <p>personal-info</p>
      </div>
      <ul>
        <AboutSidebarLink
          href={Paths.about.bio}
          label="bio"
          iconColor="text-rose-400"
          isActive={
            location.pathname === Paths.about.bio ||
            location.pathname === Paths.about.base
          }
        >
          <AboutSidebarSublink href="#about-me" label="about-me" />
        </AboutSidebarLink>
        <AboutSidebarLink
          href={Paths.about.employment}
          label="employment"
          iconColor="text-teal-400"
          isActive={location.pathname === Paths.about.employment}
        >
          <AboutSidebarSublink href="#Euvic" label="Euvic" />
          <AboutSidebarSublink href="#FP" label="Future Processing" />
          <AboutSidebarSublink href="#SIMgroep" label="SIMgroep" />
          <AboutSidebarSublink href="#SPOT" label="SPOT Group" />
          <AboutSidebarSublink href="#MIG" label="MIG" />
        </AboutSidebarLink>
        <AboutSidebarLink
          href={Paths.about.educations}
          label="educations"
          iconColor="text-indigo-500"
          isActive={location.pathname === Paths.about.educations}
        >
          <AboutSidebarSublink href="#certifications" label="certifications" />
          <AboutSidebarSublink href="#post-graduate" label="post-graduate" />
          <AboutSidebarSublink href="#university" label="university" />
        </AboutSidebarLink>
      </ul>
    </aside>
  );
};

export default AboutSidebar;
