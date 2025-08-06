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
  <Card className="flex flex-col p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
    {imageUrl && (
      <img src={imageUrl} alt={title} className="w-full rounded-md mb-3" />
    )}
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
  </Card>
);

export default ProjectsCard;
