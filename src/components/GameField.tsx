import { FC, ReactNode } from "react";
import { cn } from "../libs/utils";

type GameFieldProps = {
  width?: number;
  height?: number;
  children: ReactNode;
  gradient?: "primary" | "dark" | "vibrant" | "warm" | "cool";
  shadow?:
    | "primary"
    | "dark"
    | "vibrant"
    | "warm"
    | "cool"
    | "elevated"
    | "glow"
    | "none";
};

const DEFAULT_WIDTH = 510;
const DEFAULT_HEIGHT = 450;

const GameField: FC<GameFieldProps> = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  children,
  gradient = "cool",
  shadow = "cool",
}) => {
  const gradientClasses = {
    primary: "bg-linear-primary",
    dark: "bg-linear-dark",
    vibrant: "bg-linear-vibrant",
    warm: "bg-linear-warm",
    cool: "bg-linear-cool",
  };

  const shadowClasses = {
    primary: "shadow-linear-primary",
    dark: "shadow-linear-dark",
    vibrant: "shadow-linear-vibrant",
    warm: "shadow-linear-warm",
    cool: "shadow-linear-cool",
    elevated: "shadow-linear-elevated",
    glow: "shadow-linear-glow",
    none: "",
  };

  return (
    <div
      className={cn(
        `w-[${width}px] h-[${height}px] ${gradientClasses[gradient]} ${shadowClasses[shadow]} rounded-lg border-1 border-stroke relative`
      )}
    >
      {/* Bolt in top-left corner */}
      <div className="absolute top-2 left-2 w-4 h-4">
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 sphere rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-0.5 bg-gray-600 transform rotate-45"></div>
            <div className="w-2 h-0.5 bg-gray-800 transform -rotate-45 -mt-0.5"></div>
          </div>
        </div>
      </div>

      {/* Bolt in top-right corner */}
      <div className="absolute top-2 right-2 w-4 h-4">
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 sphere rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-0.5 bg-gray-600 transform rotate-45"></div>
            <div className="w-2 h-0.5 bg-gray-600 transform -rotate-45 -mt-0.5"></div>
          </div>
        </div>
      </div>

      {/* Bolt in bottom-left corner */}
      <div className="absolute bottom-2 left-2 w-4 h-4">
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 sphere rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-0.5 bg-gray-600 transform rotate-45"></div>
            <div className="w-2 h-0.5 bg-gray-600 transform -rotate-45 -mt-0.5"></div>
          </div>
        </div>
      </div>

      {/* Bolt in bottom-right corner */}
      <div className="absolute bottom-2 right-2 w-4 h-4">
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 sphere rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-0.5 bg-gray-600 transform rotate-45"></div>
            <div className="w-2 h-0.5 bg-gray-600 transform -rotate-45 -mt-0.5"></div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default GameField;
