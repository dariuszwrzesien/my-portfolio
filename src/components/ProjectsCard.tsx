import React, { ReactNode } from "react";
import { Card, CardDescription, CardTitle } from "./ui";
import { ProjectCategory } from "../libs/enums";
import ProjectsIcons from "./ProjectsIcons";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  categories?: ProjectCategory[];
};

const ProjectsCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  categories = [],
}) => (
  <Card className="flex gap-3 flex-col p-4 w-75 h-90 card">
    {imageUrl && (
      <img src={imageUrl} alt={title} className="w-full rounded-md border" />
    )}
    <p>{title}</p>
    <ProjectsIcons categories={categories} />
  </Card>
);

export default ProjectsCard;
