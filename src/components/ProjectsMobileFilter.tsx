import { useState } from 'react';
import { ProjectCategory } from '@libs/enums';
import { getIcon } from '@libs/utils';
import { Button } from './ui/button';
import MobileExplorerBar from './MobileExplorerBar';
import ProjectsSidebarLink from './ProjectsSidebarLink';

interface ProjectsMobileFilterProps {
  categories: ProjectCategory[];
  selected: ProjectCategory[];
  onChange: (label: ProjectCategory) => void;
  onClear: () => void;
}

const ProjectsMobileFilter = ({ categories, selected, onChange, onClear }: ProjectsMobileFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const summary =
    selected.length > 0 ? (
      <>
        {selected.map((category) => (
          <span key={category} title={category}>
            {getIcon(category)}
          </span>
        ))}
        <span className="text-sm text-foreground">({selected.length})</span>
      </>
    ) : (
      <span className="text-sm text-foreground">all</span>
    );

  return (
    <MobileExplorerBar title="projects" summary={summary} isOpen={isOpen} onOpenChange={setIsOpen}>
      <ul className="flex flex-col gap-4 p-4 pl-7">
        {categories.map((category) => (
          <li key={category}>
            <ProjectsSidebarLink
              label={category}
              icon={getIcon(category)}
              checked={selected.includes(category)}
              onChange={onChange}
            />
          </li>
        ))}
      </ul>
      <div className="px-4 pb-4">
        <Button variant="outline" size="sm" className="w-full" onClick={onClear} disabled={selected.length === 0}>
          clear-filters
        </Button>
      </div>
    </MobileExplorerBar>
  );
};

export default ProjectsMobileFilter;
