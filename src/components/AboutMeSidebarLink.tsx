import React from "react";
import { Link } from "react-router";
import { cn } from "../libs";
import {
  RiArrowDropDownFill,
  RiArrowDropRightFill,
  RiFolder3Fill,
} from "@remixicon/react";

interface AboutMeSidebarLinkProps {
  href: string;
  label: string;
  iconColor?: string;
  isActive?: boolean;
  children?: React.ReactNode;
}

const AboutMeSidebarLink: React.FC<AboutMeSidebarLinkProps> = ({
  href,
  label,
  iconColor = "text-foreground",
  isActive = false,
  children = null,
}) => {
  return (
    <div>
      <Link
        to={href}
        className={cn(
          "flex p-2 transition-all duration-400 hover:text-heading-foreground hover:bg-slate-800 cursor-pointer",
          {
            "text-heading-foreground": isActive,
          }
        )}
      >
        {isActive ? (
          <RiArrowDropDownFill className="w-11" />
        ) : (
          <RiArrowDropRightFill className="w-11" />
        )}
        <RiFolder3Fill className={cn("w-5", iconColor)} />
        <span className="pl-2">{label}</span>
      </Link>
      {isActive && <div className="pl-13">{children}</div>}
    </div>
  );
};

export default AboutMeSidebarLink;
