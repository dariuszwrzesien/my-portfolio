import { Card } from './ui';
import { ProjectCategory } from '../libs/enums';
import ProjectsIcons from './ProjectsIcons';
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from './ui/dialog';
import { DialogTitle } from '@radix-ui/react-dialog';
import Paths from '../Paths';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  categories?: ProjectCategory[];
};

const ProjectsCard = ({ title, description, imageUrl, categories = [] }: ProjectCardProps) => (
  <Dialog>
    <DialogTrigger asChild>
      <Card className="flex gap-3 flex-col p-4 w-75 h-90 project-card bg-background/70">
        {imageUrl && <img src={`${Paths.baseUrl}${imageUrl}`} alt={title} className="w-full rounded-md border" />}
        <p className="text-pretty">{title}</p>
        <ProjectsIcons categories={categories} />
      </Card>
    </DialogTrigger>
    <DialogTitle className="hidden"></DialogTitle>
    <DialogContent className="sm:max-w-[525px]">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ProjectsIcons categories={categories} />
      <DialogDescription className="text-pretty text-justify text-sm">{description}</DialogDescription>
    </DialogContent>
  </Dialog>
);

export default ProjectsCard;
