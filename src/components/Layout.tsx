import React, { ReactNode } from "react";
import HeaderDesktop from "./HeaderDesktop";
import FooterDesktop from "./FooterDesktop";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full p-8">
      <div className="h-[calc(100vh-4rem)] w-full border border-stroke grid grid-cols-12 grid-rows-12">
        <HeaderDesktop />
        <main className="flex flex-col col-span-12 row-span-10 justify-center overflow-auto custom-scrollbar p-8">
          {children}
        </main>
        <FooterDesktop />
      </div>
    </div>
  );
};

export default Layout;
