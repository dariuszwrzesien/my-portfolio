import { get } from "http";
import { getIcon } from "../libs/utils";
import { ProjectCategory } from "../libs/enums";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type ProjectsIconsProps = {
  categories: ProjectCategory[];
};

const ProjectsIcons: React.FC<ProjectsIconsProps> = ({ categories }) => (
  <div className="flex flex-wrap gap-2 ">
    {categories.map((category, idx) => (
      <Tooltip key={idx}>
        <TooltipTrigger asChild>
          <div>{getIcon(category)}</div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{category}</p>
        </TooltipContent>
      </Tooltip>
    ))}
  </div>
);

export default ProjectsIcons;
