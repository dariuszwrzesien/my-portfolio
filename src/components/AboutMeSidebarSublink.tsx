import { RiFileCodeFill } from "@remixicon/react";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router";

interface AboutMeSidebarSublinkProps {
  label: string;
  href: string;
  isActive?: boolean;
}

const AboutMeSidebarSublink: React.FC<AboutMeSidebarSublinkProps> = ({
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

export default AboutMeSidebarSublink;
