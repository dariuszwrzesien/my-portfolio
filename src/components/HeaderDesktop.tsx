import { FC } from "react";
import { useLocation, Link } from "react-router";
import { cn } from "../lib/utils";

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
    <header className="bg-background text-foreground border-b border-stroke">
      <nav className="flex justify-between">
        <div className="flex">
          <div className="border-r border-r-text-slate text-md text-center py-4 custom-sidebar-width">
            dariusz-wrzesien
          </div>
          <div className="flex border-r border-r-text-slate">
            <Link to="/" className={getNavLinkClass("/")}>
              _hello
            </Link>
          </div>
          <div className="flex border-r border-r-text-slate">
            <Link to="/about" className={getNavLinkClass("/about")}>
              _about-me
            </Link>
          </div>
          <div className="flex border-r border-r-text-slate">
            <Link to="/projects" className={cn(getNavLinkClass("/projects"))}>
              _projects
            </Link>
          </div>
        </div>
        <div className="flex border-l border-l-text-slate text-center">
          <Link to="/contact" className={getNavLinkClass("/contact")}>
            _contact-me
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
