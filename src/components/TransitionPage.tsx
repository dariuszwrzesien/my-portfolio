import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router";

interface TransitionPageProps {
  children: ReactNode;
}

const TransitionPage: React.FC<TransitionPageProps> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      // Start fade out
      setIsVisible(false);

      // After fade out completes, change content and fade in
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setIsVisible(true);
      }, 300); // 300ms fade out duration

      return () => clearTimeout(timer);
    }
  }, [location.pathname, displayLocation.pathname]);

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {isVisible && children}
    </div>
  );
};

export default TransitionPage;
