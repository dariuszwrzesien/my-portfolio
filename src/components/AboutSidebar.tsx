import {
  RiArrowDownBoxLine,
  RiArrowDownCircleFill,
  RiArrowDownSLine,
  RiArrowDropDownFill,
  RiArrowDropRightFill,
  RiFolder2Fill,
  RiFolder2Line,
  RiFolder3Fill,
  RiFolder4Fill,
  RiFolderFill,
} from "@remixicon/react";
import React from "react";

const AboutSidebar: React.FC = () => {
  return (
    <aside className="custom-sidebar-width h-full border-r border-stroke">
      <div className="flex items-center p-2 border-b border-stroke text-slate-50">
        <RiArrowDropDownFill className="w-11" />
        <p className="">personal-info</p>
      </div>
      <ul>
        <li className="flex p-2 hover:bg-slate-700 cursor-pointer">
          <RiArrowDropRightFill className="w-11" />
          <RiFolder3Fill className="text-rose-400 w-5" />
          <span className="pl-2">bio</span>
        </li>
        <li className="flex p-2 hover:bg-slate-700 cursor-pointer">
          <RiArrowDropRightFill className="w-11" />
          <RiFolder3Fill className="text-teal-400 w-5" />
          <span className="pl-2">employment</span>
        </li>
        <li className="flex p-2 hover:bg-slate-700 cursor-pointer">
          <RiArrowDropRightFill className="w-11" />
          <RiFolder3Fill className="text-indigo-500 w-5" />
          <span className="pl-2">educations</span>
        </li>
      </ul>
    </aside>
  );
};

export default AboutSidebar;
