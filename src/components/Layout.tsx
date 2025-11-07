import { ReactNode } from 'react';
import { useBackgroundEffects } from '../hooks/use-backgroundEffects';
import { useLayout } from '../contexts';
import HeaderDesktop from './HeaderDesktop';
// import FooterDesktop from './FooterDesktop';
import HeaderMobile from './HeaderMobile';
import FooterMobile from './FooterMobile';
import { useIsMobile } from '../hooks/use-mobile';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { background } = useLayout();
  const { ref: refBackgroundEffect } = useBackgroundEffects(background);
  const isMobile = useIsMobile();

  const renderHeader = () => {
    return <>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</>;
  };

  return (
    <div className="p-8">
      <div ref={refBackgroundEffect} className="flex flex-col justify-between w-full">
        {renderHeader()}
        <main className="flex flex-col overflow-auto h-[calc(100vh-12rem)] custom-scrollbar border-x border-stroke">
          {children}
        </main>
        {/* <FooterDesktop /> */}
        <FooterMobile />
      </div>
    </div>
  );
};

export default Layout;
