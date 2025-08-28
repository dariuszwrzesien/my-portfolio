import { useState } from "react";
import ProjectsSidebar from "../components/ProjectsSidebar";
import { ProjectCategory } from "@libs/enums";
import ProjectsCard from "../components/ProjectsCard";
import { RiReactjsLine } from "@remixicon/react";
import { projects } from "../data/projects";
import { get } from "http";

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

  const filteredProjects = projects.filter(
    (project) =>
      filter.length === 0 ||
      project.categories.some((category) => filter.includes(category))
  );

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
    <div className="flex h-full z-1">
      <ProjectsSidebar categories={categories} onChange={handleOnChange} />
      <div className="flex flex-wrap gap-8 p-10 overflow-auto custom-scrollbar w-full">
        {filteredProjects.map((project) => (
          <ProjectsCard
            key={project.title}
            title={project.title}
            description={project.description}
            categories={project.categories}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
