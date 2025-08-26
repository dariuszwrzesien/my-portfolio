import { cn } from "../libs/utils";

interface ScrewProps {
  size?: number;
  className?: string;
}

const DEFAULT_SIZE = 15;

const Screw = ({ size = DEFAULT_SIZE, className }: ScrewProps) => (
  <div className={className}>
    <div className="relative w-full h-full">
      <div
        className={cn(
          `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sphere rounded-full`
        )}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-2 h-0.5 bg-gray-600 transform rotate-45"></div>
        <div className="w-2 h-0.5 bg-gray-800 transform -rotate-45 -mt-0.5"></div>
      </div>
    </div>
  </div>
);

export default Screw;
