import { useState } from 'react';
import ProjectsSidebar from '../components/ProjectsSidebar';
import ProjectsMobileFilter from '../components/ProjectsMobileFilter';
import { useIsMobile } from '../hooks/use-mobile';
import { cn } from '@libs/utils';
import { ProjectCategory } from '@libs/enums';
import ProjectsCard from '../components/ProjectsCard';
import { projects } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory[]>([]);
  const isMobile = useIsMobile();

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
    (project) => filter.length === 0 || project.categories.some((category) => filter.includes(category))
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
    <div className={cn('flex h-full z-1', { 'flex-col': isMobile })}>
      {isMobile ? (
        <ProjectsMobileFilter
          categories={categories}
          selected={filter}
          onChange={handleOnChange}
          onClear={() => setFilter([])}
        />
      ) : (
        <ProjectsSidebar categories={categories} selected={filter} onChange={handleOnChange} />
      )}
      <div
        className={cn('flex flex-wrap flex-1 min-h-0 gap-8 p-10 overflow-auto custom-scrollbar w-full', {
          'justify-center p-4': isMobile,
        })}
      >
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
