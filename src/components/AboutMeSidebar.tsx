import { RiArrowDropDownFill } from '@remixicon/react';
import { useLocation } from 'react-router';
import { aboutMeSections, isAboutMeSectionActive } from '../data/aboutMe';
import AboutMeSidebarLink from './AboutMeSidebarLink';
import AboutMeSidebarSublink from './AboutMeSidebarSublink';

const AboutMeSidebar = () => {
  const location = useLocation();
  return (
    <aside className="custom-sidebar-width h-full border-r border-stroke">
      <div className="flex items-center p-2 border-b border-stroke text-slate-50">
        <RiArrowDropDownFill className="w-11" />
        <p>personal-info</p>
      </div>
      <ul>
        {aboutMeSections.map((section) => (
          <AboutMeSidebarLink
            key={section.href}
            href={section.href}
            label={section.label}
            iconColor={section.iconColor}
            isActive={isAboutMeSectionActive(location.pathname, section.href)}
          >
            {section.sublinks.map((sublink) => (
              <AboutMeSidebarSublink key={sublink.href} href={sublink.href} label={sublink.label} />
            ))}
          </AboutMeSidebarLink>
        ))}
      </ul>
    </aside>
  );
};

export default AboutMeSidebar;
