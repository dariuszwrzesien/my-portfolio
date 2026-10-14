import { useState } from 'react';
import { useLocation } from 'react-router';
import { aboutMeSections, isAboutMeSectionActive } from '../data/aboutMe';
import AboutMeSidebarLink from './AboutMeSidebarLink';
import MobileExplorerBar from './MobileExplorerBar';

const AboutMeMobileNav = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = aboutMeSections.find((section) => isAboutMeSectionActive(location.pathname, section.href));

  return (
    <MobileExplorerBar
      title={
        <>
          personal-info
          {activeSection && <span className="text-foreground"> / {activeSection.label}</span>}
        </>
      }
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    >
      <nav aria-label="About me sections" onClick={() => setIsOpen(false)}>
        {aboutMeSections.map((section) => (
          <AboutMeSidebarLink
            key={section.href}
            href={section.href}
            label={section.label}
            iconColor={section.iconColor}
            isActive={isAboutMeSectionActive(location.pathname, section.href)}
          />
        ))}
      </nav>
    </MobileExplorerBar>
  );
};

export default AboutMeMobileNav;
