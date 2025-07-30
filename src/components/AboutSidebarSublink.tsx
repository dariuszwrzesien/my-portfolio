import { RiFileCodeFill } from "@remixicon/react";
import React from "react";
import { Link } from "react-router";

interface AboutSidebarSublinkProps {
  label: string;
  href: string;
  isActive?: boolean;
}

const AboutSidebarSublink: React.FC<AboutSidebarSublinkProps> = ({
  label,
  href,
  isActive = false,
}) => {
  return (
    <Link to={href} className="flex items-center">
      <RiFileCodeFill className="w-5" />
      <span className="pl-2 text-sm">{label}</span>
    </Link>
  );
};

export default AboutSidebarSublink;
