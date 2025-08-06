import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import { Link } from "react-router";
import { cn } from "@libs/utils";
import { SettingsDropdown } from "./SettingsDropdown";

const FooterDesktop = () => {
  const navLinkClass =
    "py-4 px-8 cursor-pointer border-l-1 border-l-text-slate transition-all duration-400 border-b-3 border-b-transparent hover:text-heading-foreground";

  return (
    <footer className="flex flex-col justify-end bg-background text-foreground">
      <nav className="flex justify-between border-t border-stroke">
        <div className="flex">
          <div className="text-md py-4 px-4">find me in</div>
          <div className={navLinkClass}>
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

export default FooterDesktop;
