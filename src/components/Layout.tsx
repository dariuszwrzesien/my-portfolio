import { ReactNode } from "react";
import { BackgroundEffects } from "../libs/enums";
import { useBackgroundEffects } from "../hooks/use-backgroundEffects";
import { useLayout } from "../contexts";
import HeaderDesktop from "./HeaderDesktop";
import FooterDesktop from "./FooterDesktop";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { background } = useLayout();
  const { ref: refBackgroundEffect } = useBackgroundEffects(background);

  return (
    <div className="p-8">
      <div
        ref={refBackgroundEffect}
        className="flex flex-col justify-between w-full"
      >
        <HeaderDesktop />
        <main className="flex flex-col overflow-auto h-[calc(100vh-12rem)] custom-scrollbar border-x border-stroke">
          {children}
        </main>
        <FooterDesktop />
      </div>
    </div>
  );
};

export default Layout;
