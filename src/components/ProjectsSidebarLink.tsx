import { ReactNode } from 'react';
import { Checkbox } from './ui/checkbox';
import { Label } from '@radix-ui/react-label';
import { ProjectCategory } from '@libs/enums';

interface ProjectsSidebarLinkProps {
  label: ProjectCategory;
  icon: ReactNode;
  onChange: (label: ProjectCategory) => void;
}

const ProjectsSidebarLink = ({ label, icon, onChange }: ProjectsSidebarLinkProps) => {
  const handleCheckboxChange = () => {
    onChange(label);
  };

  return (
    <div className="flex items-center w-full">
      <Checkbox id={label} className="mr-2 hover:cursor-pointer" onClick={handleCheckboxChange} />
      <Label
        htmlFor={label}
        className="flex gap-2 transition-all duration-400 hover:text-heading-foreground hover:cursor-pointer"
      >
        {icon}
        {label}
      </Label>
    </div>
  );
};

export default ProjectsSidebarLink;
