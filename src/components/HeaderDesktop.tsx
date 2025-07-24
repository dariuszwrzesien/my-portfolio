import { FC } from "react";
import { useLocation, Link } from "react-router";
import { cn } from "../lib/utils";

const HeaderDesktop: FC = () => {
  const location = useLocation();

  const navLinkClass =
    "py-4 px-8 cursor-pointer border-l-1 border-l-text-slate transition-all duration-200 border-b-3 border-b-transparent hover:text-heading-foreground";

  const activeNavLinkClass =
    "py-4 px-8 cursor-pointer border-l-1 border-l-text-slate transition-all duration-200 border-b-3 border-b-primary-background text-heading-foreground";

  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? activeNavLinkClass : navLinkClass;
  };

  return (
    <header className="w-full bg-background text-foreground">
      <nav className="flex justify-between items-center border-b border-stroke">
        <div className="flex">
          <div className="text-md py-4 px-16">dariusz-wrzesien</div>
          <Link to="/" className={getNavLinkClass("/")}>
            _hello
          </Link>
          <Link to="/about" className={getNavLinkClass("/about")}>
            _about-me
          </Link>
          <Link to="/projects" className={getNavLinkClass("/projects")}>
            _projects
          </Link>
          <Link
            to="/cv"
            className={cn(
              getNavLinkClass("/cv"),
              "border-r-1 border-r-text-slate"
            )}
          >
            _cv
          </Link>
        </div>
        <div>
          <Link to="/contact" className={getNavLinkClass("/contact")}>
            _contact-me
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
