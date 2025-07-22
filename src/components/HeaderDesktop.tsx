import React from "react";

const HeaderDesktop: React.FC = () => {
  return (
    <header className="w-full bg-background text-foreground p-4">
      <nav className="flex justify-between items-center border-b border-stroke">
        <div className="flex gap-8">
          <div className="text-md p-4">dariusz-wrzesien</div>
          <div className="p-4">_hello</div>
          <div className="p-4">_about-me</div>
          <div className="p-4">_projects</div>
          <div className="p-4">_cv</div>
        </div>
        <div>
          <div>_contact-me</div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
