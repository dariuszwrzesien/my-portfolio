import { RiArrowDropDownFill, RiFileCodeFill } from "@remixicon/react";
import { useLocation } from "react-router";
import Paths from "../Paths";
import AboutMeSidebarLink from "./AboutMeSidebarLink";
import AboutMeSidebarSublink from "./AboutMeSidebarSublink";

const AboutMeSidebar = () => {
  const location = useLocation();
  return (
    <aside className="custom-sidebar-width h-full border-r border-stroke">
      <div className="flex items-center p-2 border-b border-stroke text-slate-50">
        <RiArrowDropDownFill className="w-11" />
        <p>personal-info</p>
      </div>
      <ul>
        <AboutMeSidebarLink
          href={Paths.aboutMe.bio}
          label="bio"
          iconColor="text-rose-400"
          isActive={
            location.pathname === Paths.aboutMe.bio ||
            location.pathname === Paths.aboutMe.base
          }
        >
          <AboutMeSidebarSublink href="#about-me" label="about-me" />
          <AboutMeSidebarSublink href="#skills" label="skills" />
        </AboutMeSidebarLink>
        <AboutMeSidebarLink
          href={Paths.aboutMe.employment}
          label="employment"
          iconColor="text-teal-400"
          isActive={location.pathname === Paths.aboutMe.employment}
        >
          <AboutMeSidebarSublink href="#euvic" label="Euvic" />
          <AboutMeSidebarSublink href="#fp" label="Future Processing" />
          <AboutMeSidebarSublink href="#simgroep" label="SIMgroep" />
          <AboutMeSidebarSublink href="#spot" label="SPOT Group" />
          <AboutMeSidebarSublink href="#mig" label="MIG" />
        </AboutMeSidebarLink>
        <AboutMeSidebarLink
          href={Paths.aboutMe.educations}
          label="educations"
          iconColor="text-indigo-500"
          isActive={location.pathname === Paths.aboutMe.educations}
        >
          <AboutMeSidebarSublink
            href="#certifications"
            label="certifications"
          />
          <AboutMeSidebarSublink href="#post-graduate" label="post-graduate" />
          <AboutMeSidebarSublink href="#university" label="university" />
        </AboutMeSidebarLink>
      </ul>
    </aside>
  );
};

export default AboutMeSidebar;
