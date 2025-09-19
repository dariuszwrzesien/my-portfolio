import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import { Link } from "react-router";
import { cn } from "@libs/utils";
import { SettingsDropdown } from "./SettingsDropdown";

const FooterMobile = () => {
  const navLinkClass =
    "py-4 px-8 cursor-pointer border-l-1 border-l-text-slate transition-all duration-400 border-b-3 border-b-transparent";

  return (
    <footer className="flex flex-col justify-end bg-background text-foreground">
      <nav className="flex justify-between border border-stroke">
        <div className="flex items-center">
          <div className={cn(navLinkClass, "border-l-0")}>
            <Link
              to="https://www.linkedin.com/in/dariusz-wrzesie%C5%84-605a2b63/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinBoxFill />
            </Link>
          </div>
          <div className={cn(navLinkClass, "border-r-1 border-r-text-slate")}>
            <Link
              to="https://github.com/dariuszwrzesien"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiGithubFill />
            </Link>
          </div>
        </div>
        <div>
          <SettingsDropdown className={navLinkClass} />
        </div>
      </nav>
    </footer>
  );
};

export default FooterMobile;
