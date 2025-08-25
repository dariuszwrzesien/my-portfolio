import { cn } from "../libs/utils";

interface ScrewProps {
  width?: number;
  height?: number;
}

const Screw = ({ width = 20, height = 20 }: ScrewProps) => (
  <div className="relative w-full h-full">
    <div
      className={cn(
        `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[${width}px] h-[${height}px] sphere rounded-full`
      )}
    ></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-2 h-0.5 bg-gray-600 transform rotate-45"></div>
      <div className="w-2 h-0.5 bg-gray-800 transform -rotate-45 -mt-0.5"></div>
    </div>
  </div>
);

export default Screw;
