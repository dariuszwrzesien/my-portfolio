import { useLocation, useNavigate } from "react-router";
import HeaderDesktopLink from "./HeaderDesktopLink";
import Paths from "../Paths";

const HeaderDesktop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className="bg-background border-b border-stroke">
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
            name="_hello"
            isActive={location.pathname === Paths.home}
          />
          <HeaderDesktopLink
            href={Paths.aboutMe.base}
            name="_about-me"
            isActive={location.pathname.startsWith(Paths.aboutMe.base)}
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
