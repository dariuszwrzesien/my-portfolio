import { FC, ReactNode } from "react";
import { cn } from "../libs/utils";
import Screw from "./Screw";

type GameFieldProps = {
  width?: number;
  height?: number;
  children: ReactNode;
};

const DEFAULT_WIDTH = 510;
const DEFAULT_HEIGHT = 460;

const GameField: FC<GameFieldProps> = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  children,
}) => {
  return (
    <div
      className={cn(
        "bg-linear-teal-indigo shadow-linear-glow rounded-lg border-1 border-stroke relative"
      )}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {/* Screw in top-left corner */}
      <div className="absolute top-2 left-2 w-4 h-4">
        <Screw />
      </div>

      {/* Screw in top-right corner */}
      <div className="absolute top-2 right-2 w-4 h-4">
        <Screw />
      </div>

      {/* Screw in bottom-left corner */}
      <div className="absolute bottom-2 left-2 w-4 h-4">
        <Screw />
      </div>

      {/* Screw in bottom-right corner */}
      <div className="absolute bottom-2 right-2 w-4 h-4">
        <Screw />
      </div>

      {children}
    </div>
  );
};

export default GameField;
