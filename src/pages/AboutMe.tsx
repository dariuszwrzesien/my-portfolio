import AboutSidebar from '../components/AboutMeSidebar';
import AboutMeMobileNav from '../components/AboutMeMobileNav';
import { Outlet } from 'react-router';
import { useIsMobile } from '../hooks/use-mobile';
import { cn } from '@libs/utils';

const AboutMe = () => {
  const isMobile = useIsMobile();

  return (
    <div className={cn('flex h-full z-1 bg-background/70', { 'flex-col': isMobile })}>
      {isMobile ? <AboutMeMobileNav /> : <AboutSidebar />}
      <div className="flex flex-1 min-h-0 min-w-0">
        <Outlet />
      </div>
    </div>
  );
};

export default AboutMe;
