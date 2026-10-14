import { ReactNode, useEffect, useId, useRef } from 'react';
import { RiArrowDropDownFill, RiArrowDropRightFill } from '@remixicon/react';
import { cn } from '@libs/utils';

interface MobileExplorerBarProps {
  title: ReactNode;
  summary?: ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
  className?: string;
}

// Collapsible, IDE-explorer-like bar that replaces the left sidebar on mobile
const MobileExplorerBar = ({ title, summary, isOpen, onOpenChange, children, className }: MobileExplorerBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOpenChange(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onOpenChange]);

  return (
    <div ref={ref} className={cn('relative z-10 shrink-0', className)}>
      <button
        type="button"
        onClick={() => onOpenChange(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex items-center w-full p-2 border-b border-stroke bg-background/70 text-slate-50 cursor-pointer transition-all duration-400 hover:bg-slate-800"
      >
        {isOpen ? <RiArrowDropDownFill className="w-11 shrink-0" /> : <RiArrowDropRightFill className="w-11 shrink-0" />}
        <span className="truncate text-left">{title}</span>
        {summary && <span className="flex items-center gap-1 ml-auto pl-2 pr-2">{summary}</span>}
      </button>

      <div
        id={panelId}
        inert={!isOpen}
        className={cn(
          'absolute top-full left-0 right-0 max-h-[50vh] overflow-auto custom-scrollbar bg-background border-b border-stroke shadow-lg transition-all duration-300',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default MobileExplorerBar;
