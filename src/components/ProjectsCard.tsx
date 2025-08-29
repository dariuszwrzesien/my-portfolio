import React, { ReactNode } from "react";
import { Button, Card, CardDescription, CardTitle } from "./ui";
import { ProjectCategory } from "../libs/enums";
import ProjectsIcons from "./ProjectsIcons";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

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
  <Dialog>
    <DialogTrigger asChild>
      <Card className="flex gap-3 flex-col p-4 w-75 h-90 project-card bg-background/70">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full rounded-md border"
          />
        )}
        <p className="text-pretty">{title}</p>
        <ProjectsIcons categories={categories} />
      </Card>
    </DialogTrigger>
    <DialogTitle></DialogTitle>
    <DialogContent className="sm:max-w-[525px]">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ProjectsIcons categories={categories} />
      <p className="text-pretty text-justify text-sm">{description}</p>
    </DialogContent>
  </Dialog>
);

export default ProjectsCard;
