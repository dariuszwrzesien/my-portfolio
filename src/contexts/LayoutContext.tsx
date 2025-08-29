import { createContext, useContext, useState, ReactNode } from "react";
import { BackgroundEffects } from "../libs/enums";

export interface LayoutContextType {
  background: BackgroundEffects;
  setBackground: (effect: BackgroundEffects) => void;
  isMobile: boolean;
  setIsMobile: (mobile: boolean) => void;
}

interface LayoutProviderProps {
  children: ReactNode;
}
const DEFAULT_BACKGROUND = BackgroundEffects.WAVES;
const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [background, setBackground] =
    useState<BackgroundEffects>(DEFAULT_BACKGROUND);
  const [isMobile, setIsMobile] = useState(false);

  const value: LayoutContextType = {
    background,
    setBackground,
    isMobile,
    setIsMobile,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
