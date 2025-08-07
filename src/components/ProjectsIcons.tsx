import { get } from "http";
import { getIcon } from "../libs/utils";
import { ProjectCategory } from "../libs/enums";

type ProjectsIconsProps = {
  categories: ProjectCategory[];
};

const ProjectsIcons: React.FC<ProjectsIconsProps> = ({ categories }) => (
  <div className="flex gap-2">
    {categories.map((category, idx) => (
      <div key={idx}>{getIcon(category)}</div>
    ))}
  </div>
);

export default ProjectsIcons;
