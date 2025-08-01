import React from "react";
import { Link } from "react-router";
import { cn } from "../libs";

interface HeaderDesktopLinkProps {
  href: string;
  name: string;
  className?: string;
  isActive?: boolean;
}

const HeaderDesktopLink: React.FC<HeaderDesktopLinkProps> = ({
  href,
  name,
  className,
  isActive = false,
}) => {
  return (
    <div className={cn("flex border-r border-r-text-slate", className)}>
      <Link
        to={href}
        className={cn(
          "py-4 px-8 cursor-pointer transition-all duration-400 border-b-3 border-b-background hover:text-heading-foreground",
          {
            "border-b-primary-background text-heading-foreground": isActive,
          }
        )}
      >
        {name}
      </Link>
    </div>
  );
};

export default HeaderDesktopLink;
