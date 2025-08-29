import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui";
import { RiCodeBlock, RiPuzzle2Line, RiSettings4Line } from "@remixicon/react";
import { BackgroundEffects } from "../libs/enums";
import { useLayout } from "../contexts";

interface SettingsDropdownProps {
  className?: string;
  background?: BackgroundEffects | null;
  setBackground?: (effect: BackgroundEffects | null) => void;
}

export function SettingsDropdown({ className }: SettingsDropdownProps) {
  const { background, setBackground } = useLayout();

  const handleStoryBook = () => {
    window.open(
      "https://dariuszwrzesien.github.io/my-portfolio-storybook/",
      "_blank"
    );
  };

  const handlePageSource = () => {
    window.open("https://github.com/dariuszwrzesien/my-portfolio", "_blank");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className={className}>
          <RiSettings4Line />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Background</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={background as string}
          onValueChange={(value) => setBackground(value as BackgroundEffects)}
        >
          <DropdownMenuRadioItem
            value={BackgroundEffects.WAVES}
            className="cursor-pointer transition-all duration-400 hover:text-heading-foreground"
          >
            Waves
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value={BackgroundEffects.NET}
            className="cursor-pointer transition-all duration-400 hover:text-heading-foreground"
          >
            Net
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value={BackgroundEffects.EMPTY}
            className="cursor-pointer transition-all duration-400 hover:text-heading-foreground"
          >
            Empty
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
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
