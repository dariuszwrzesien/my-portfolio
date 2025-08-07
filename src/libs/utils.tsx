import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ProjectCategory } from "./enums";
import {
  RiAngularjsLine,
  RiCss3Line,
  RiHtml5Fill,
  RiNodejsFill,
  RiPhpFill,
  RiReactjsLine,
  RiVuejsLine,
} from "@remixicon/react";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getIcon = (category: ProjectCategory) => {
  switch (category) {
    case ProjectCategory.HTML:
      return <RiHtml5Fill className={`w-5 text-orange-500`} />;
    case ProjectCategory.CSS:
      return <RiCss3Line className={`w-5 text-blue-500`} />;
    case ProjectCategory.React:
      return <RiReactjsLine className={`w-5 text-cyan-500`} />;
    case ProjectCategory.Vue:
      return <RiVuejsLine className={`w-5 text-green-500`} />;
    case ProjectCategory.Angular:
      return <RiAngularjsLine className={`w-5 text-red-500`} />;
    case ProjectCategory.NodeJS:
      return <RiNodejsFill className={`w-5 text-green-700`} />;
    case ProjectCategory.PHP:
      return <RiPhpFill className={`w-5 text-purple-500`} />;
    default:
      return null;
  }
};
