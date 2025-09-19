import { useLocation, useNavigate } from "react-router";
import HeaderDesktopLink from "./HeaderDesktopLink";
import Paths from "../Paths";
import { cn } from "../libs/utils";

const HeaderDesktop = ({ className }: { className: string }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className={cn("bg-background border border-stroke", className)}>
      <nav className="flex justify-between">
        <div className="flex">
          <div
            className="border-r border-r-text-slate text-md text-center py-4 custom-sidebar-width cursor-default"
            onClick={() => navigate(Paths.home)}
          >
            dariusz-wrzesień
          </div>
          <HeaderDesktopLink
            href={Paths.home}
            className="flex border-r border-r-text-slate"
            name="_hello"
            isActive={location.pathname === Paths.home}
          />
          <HeaderDesktopLink
            href={Paths.aboutMe.base}
            className="flex border-r border-r-text-slate"
            name="_about-me"
            isActive={location.pathname.startsWith(Paths.aboutMe.base)}
          />
          <HeaderDesktopLink
            href={Paths.projects}
            className="flex border-r border-r-text-slate"
            name="_projects"
            isActive={location.pathname === Paths.projects}
          />
        </div>
        <HeaderDesktopLink
          href={Paths.contact}
          name="_contact-me"
          className="flex border-l border-l-text-slate"
          isActive={location.pathname === Paths.contact}
        />
      </nav>
    </header>
  );
};

export default HeaderDesktop;
