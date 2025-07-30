import { FC } from "react";
import { useLocation, Link } from "react-router";
import { cn } from "../libs/utils";
import HeaderDesktopLink from "./HeaderDesktopLink";
import Paths from "../Paths";

const HeaderDesktop: FC = () => {
  const location = useLocation();

  const navLinkClass =
    "py-4 px-8 cursor-pointer transition-all duration-400 border-b-3 border-b-background hover:text-heading-foreground";

  const activeNavLinkClass =
    "py-4 px-8 cursor-pointer transition-all duration-400 border-b-3 border-b-primary-background text-heading-foreground";

  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? activeNavLinkClass : navLinkClass;
  };

  return (
    <header className="bg-background border-b border-stroke">
      <nav className="flex justify-between">
        <div className="flex">
          <div className="border-r border-r-text-slate text-md text-center py-4 custom-sidebar-width">
            dariusz-wrzesień
          </div>
          <HeaderDesktopLink
            href={Paths.home}
            name="_hello"
            isActive={location.pathname === Paths.home}
          />
          <HeaderDesktopLink
            href={Paths.about.base}
            name="_about-me"
            isActive={location.pathname === Paths.about.base}
          />
          <HeaderDesktopLink
            href={Paths.projects}
            name="_projects"
            isActive={location.pathname === Paths.projects}
          />
        </div>
        <HeaderDesktopLink
          href={Paths.contact}
          name="_contact-me"
          className="flex border-l border-l-text-slate text-center"
          isActive={location.pathname === Paths.contact}
        />
      </nav>
    </header>
  );
};

export default HeaderDesktop;
