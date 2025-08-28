import { ReactNode } from "react";
import HeaderDesktop from "./HeaderDesktop";
import FooterDesktop from "./FooterDesktop";
import { useBackgroundEffects } from "../hooks/use-backgroundEffects";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { ref: refBackground } = useBackgroundEffects();

  return (
    <div className="p-8">
      <div className="flex flex-col justify-between h-[calc(100vh-4rem)] w-full border border-stroke">
        <HeaderDesktop />
        <main
          ref={refBackground}
          className="flex flex-col overflow-auto custom-scrollbar h-[calc(100vh-4rem)]"
        >
          {children}
        </main>
        <FooterDesktop />
      </div>
    </div>
  );
};

export default Layout;
