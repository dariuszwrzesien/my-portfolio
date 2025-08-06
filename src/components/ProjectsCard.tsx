import React from "react";
import { Card } from "./ui";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

const ProjectsCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
}) => (
  <Card className="flex flex-col p-4 w-84 h-60">
    {imageUrl && (
      <img
        src={imageUrl}
        alt={title}
        className="w-[150px] h-[100px] rounded-md"
      />
    )}
    <h3 className="text-lg font-semibold">{title}</h3>
    <p>{description}</p>
  </Card>
);

export default ProjectsCard;
