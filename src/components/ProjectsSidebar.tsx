import {
  RiAngularjsLine,
  RiArrowDropDownFill,
  RiCss3Line,
  RiHtml5Fill,
  RiNodejsFill,
  RiPhpFill,
  RiReactjsLine,
  RiVuejsLine,
} from "@remixicon/react";
import ProjectsSidebarLink from "./ProjectsSidebarLink";
import { ProjectCategory } from "@libs/enums";

interface ProjectsSidebarProps {
  categories: ProjectCategory[];
  onChange: (label: ProjectCategory) => void;
}

const ProjectsSidebar = ({ categories, onChange }: ProjectsSidebarProps) => {
  const getIcon = (category: ProjectCategory) => {
    switch (category) {
      case ProjectCategory.HTML:
        return <RiHtml5Fill className="w-5 text-orange-500" />;
      case ProjectCategory.CSS:
        return <RiCss3Line className="w-5 text-blue-500" />;
      case ProjectCategory.React:
        return <RiReactjsLine className="w-5 text-cyan-500" />;
      case ProjectCategory.Vue:
        return <RiVuejsLine className="w-5 text-green-500" />;
      case ProjectCategory.Angular:
        return <RiAngularjsLine className="w-5 text-red-500" />;
      case ProjectCategory.NodeJS:
        return <RiNodejsFill className="w-5 text-green-700" />;
      case ProjectCategory.PHP:
        return <RiPhpFill className="w-5 text-purple-500" />;
      default:
        return null;
    }
  };
  return (
    <aside className="flex flex-col gap-4 custom-sidebar-width h-full border-r border-stroke">
      <div className="flex items-center p-2 border-b border-stroke text-slate-50">
        <RiArrowDropDownFill className="w-11" />
        <p>projects</p>
      </div>
      <ul className="flex flex-col gap-4 pl-7">
        {categories.map((category) => (
          <ProjectsSidebarLink
            key={category}
            label={category}
            icon={getIcon(category)}
            onChange={onChange}
          />
        ))}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
