import { ReactNode } from "react";
import { BackgroundEffects } from "../libs/enums";
import { useBackgroundEffects } from "../hooks/use-backgroundEffects";
import { useLayout } from "../contexts";
import HeaderDesktop from "./HeaderDesktop";
import FooterDesktop from "./FooterDesktop";
import HeaderMobile from "./HeaderMobile";
import FooterMobile from "./FooterMobile";
import { useIsMobile } from "../hooks/use-mobile";
import { useEffect } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { background } = useLayout();
  const { ref: refBackgroundEffect } = useBackgroundEffects(background);
  const isMobile = useIsMobile();

  useEffect(() => {
    console.log("isMobile:", isMobile);
  }, [isMobile]);

  const renderHeader = () => {
    return (
      <>
        <HeaderDesktop className="hidden xl:block" />
        <HeaderMobile className="block xl:hidden" />
      </>
    );
  };

  return (
    <div className="p-8">
      <div
        ref={refBackgroundEffect}
        className="flex flex-col justify-between w-full"
      >
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
