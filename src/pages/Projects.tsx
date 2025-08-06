import { useState } from "react";
import ProjectsSidebar from "../components/ProjectsSidebar";
import { ProjectCategory } from "@libs/enums";
import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory[]>([]);

  const categories: ProjectCategory[] = [
    ProjectCategory.HTML,
    ProjectCategory.CSS,
    ProjectCategory.React,
    ProjectCategory.Vue,
    ProjectCategory.Angular,
    ProjectCategory.NodeJS,
    ProjectCategory.PHP,
  ];

  const handleOnChange = (label: ProjectCategory) => {
    setFilter((prev) => {
      const newFilter = [...prev];
      if (newFilter.includes(label)) {
        newFilter.splice(newFilter.indexOf(label), 1);
      } else {
        newFilter.push(label);
      }
      return newFilter;
    });
  };

  return (
    <div className="flex h-full">
      <ProjectsSidebar categories={categories} onChange={handleOnChange} />
      <div className="flex flex-wrap gap-4 p-10 overflow-auto custom-scrollbar w-full">
        <ProjectsCard
          title="Project Title"
          description="Project Description"
          imageUrl="/images/300x200.jpeg"
        />
        <ProjectsCard
          title="Project Title"
          description="Project Description"
          imageUrl="/images/300x200.jpeg"
        />
        <ProjectsCard
          title="Project Title"
          description="Project Description"
          imageUrl="/images/300x200.jpeg"
        />
        <ProjectsCard
          title="Project Title"
          description="Project Description"
          imageUrl="/images/300x200.jpeg"
        />
        <ProjectsCard
          title="Project Title"
          description="Project Description"
          imageUrl="/images/300x200.jpeg"
        />
        <ProjectsCard
          title="Project Title"
          description="Project Description"
          imageUrl="/images/300x200.jpeg"
        />
      </div>
    </div>
  );
};

export default Projects;
