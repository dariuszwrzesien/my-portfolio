import { RiArrowDownCircleFill, RiArrowDownSLine } from "@remixicon/react";
import React from "react";

const AboutSidebar: React.FC = () => {
  return (
    <aside className="custom-sidebar-width h-full border-r border-stroke">
      <div className="flex items-center p-2 border-b border-stroke text-slate-50">
        <RiArrowDownSLine className="w-10" />
        <p className="">personal-info</p>
      </div>
      <ul>
        <li>🌍 Based in Poland</li>
        <li>💻 JavaScript, TypeScript, React</li>
        <li>
          📫 <a href="mailto:dariusz@example.com">Contact Me</a>
        </li>
      </ul>
    </aside>
  );
};

export default AboutSidebar;
