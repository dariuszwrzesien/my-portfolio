import { createContext, useContext, useState, ReactNode } from 'react';
import { BackgroundEffects } from '../libs/enums';

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
const BACKGROUND_STORAGE_KEY = 'my-portfolio-background-effect';
const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

// Helper function to get initial background from localStorage
const getInitialBackground = (): BackgroundEffects => {
  try {
    const stored = localStorage.getItem(BACKGROUND_STORAGE_KEY);
    if (stored && Object.values(BackgroundEffects).includes(stored as BackgroundEffects)) {
      return stored as BackgroundEffects;
    }
  } catch (error) {
    console.warn('Failed to load background from localStorage:', error);
  }
  return DEFAULT_BACKGROUND;
};

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [background, setBackgroundState] = useState<BackgroundEffects>(getInitialBackground);
  const [isMobile, setIsMobile] = useState(false);

  const setBackground = (effect: BackgroundEffects) => {
    try {
      localStorage.setItem(BACKGROUND_STORAGE_KEY, effect);
      setBackgroundState(effect);
    } catch (error) {
      console.warn('Failed to save background to localStorage:', error);
      setBackgroundState(effect);
    }
  };

  const value: LayoutContextType = {
    background,
    setBackground,
    isMobile,
    setIsMobile,
  };

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};

export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
