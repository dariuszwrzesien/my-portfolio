import React, { ReactNode } from "react";
import HeaderDesktop from "./HeaderDesktop";
import FooterDesktop from "./FooterDesktop";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full p-8">
      <div className="h-[calc(100vh-4rem)] w-full border border-stroke flex flex-col">
        <HeaderDesktop />
        <main className="flex-1 overflow-auto custom-scrollbar">
          {children}
        </main>
        <FooterDesktop />
      </div>
    </div>
  );
};

export default Layout;
