import React, { ReactNode } from "react";
import HeaderDesktop from "./HeaderDesktop";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col max-h-screen">
      <HeaderDesktop />
      <main className="flex-1">{children}</main>
      {/* Footer can go here */}
    </div>
  );
};

export default Layout;
