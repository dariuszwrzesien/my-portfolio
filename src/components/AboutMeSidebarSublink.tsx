import { RiFileCodeFill } from '@remixicon/react';
import { Link } from 'react-router';

interface AboutMeSidebarSublinkProps {
  label: string;
  href: string;
}

const AboutMeSidebarSublink = ({ label, href }: AboutMeSidebarSublinkProps) => {
  return (
    <Link to={href} className="flex items-center">
      <RiFileCodeFill className="w-5" />
      <span className="pl-2 text-sm">{label}</span>
    </Link>
  );
};

export default AboutMeSidebarSublink;
