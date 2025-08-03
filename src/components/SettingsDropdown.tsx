import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiCodeBlock, RiPuzzle2Line, RiSettings4Line } from "@remixicon/react";

const handleStoryBook = () => {
  window.open(
    "https://dariuszwrzesien.github.io/my-portfolio-storybook/",
    "_blank"
  );
};

const handlePageSource = () => {
  window.open("https://github.com/dariuszwrzesien/my-portfolio", "_blank");
};

export function SettingsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <RiSettings4Line />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem
          className="cursor-pointer transition-all duration-400 hover:text-heading-foreground"
          onClick={handleStoryBook}
        >
          <RiPuzzle2Line className="text-teal-500" />
          StoryBook
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer transition-all duration-400 hover:text-heading-foreground"
          onClick={handlePageSource}
        >
          <RiCodeBlock className="text-teal-500" />
          Page source
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
