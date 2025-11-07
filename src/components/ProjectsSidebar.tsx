import { RiArrowDropDownFill } from '@remixicon/react';
import ProjectsSidebarLink from './ProjectsSidebarLink';
import { ProjectCategory } from '@libs/enums';
import { getIcon } from '@libs/utils';

interface ProjectsSidebarProps {
  categories: ProjectCategory[];
  onChange: (label: ProjectCategory) => void;
}

const ProjectsSidebar = ({ categories, onChange }: ProjectsSidebarProps) => {
  return (
    <aside className="flex flex-col gap-4 custom-sidebar-width h-full border-r border-stroke bg-background/70">
      <div className="flex items-center p-2 border-b border-stroke text-slate-50">
        <RiArrowDropDownFill className="w-11" />
        <p>projects</p>
      </div>
      <ul className="flex flex-col gap-4 pl-7">
        {categories.map((category) => (
          <ProjectsSidebarLink key={category} label={category} icon={getIcon(category)} onChange={onChange} />
        ))}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
