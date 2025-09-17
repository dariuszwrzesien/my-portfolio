import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useIsMobile } from "../hooks/use-mobile";
import Paths from "../Paths";

interface MobileLinkProps {
  href: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const MobileLink = ({ href, name, isActive, onClick }: MobileLinkProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
    onClick(); // Close menu
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-full text-left px-4 py-3 border-b border-stroke
        transition-colors duration-200
        ${
          isActive
            ? "bg-accent-blue text-white"
            : "text-text-primary hover:bg-stroke/20"
        }
      `}
    >
      {name}
    </button>
  );
};

const HeaderMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // Don't render if not mobile
  if (!isMobile) {
    return null;
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="bg-background border-b border-stroke relative z-50">
        <nav className="flex justify-between items-center px-4 py-3">
          {/* Logo/Brand */}
          <div
            className="text-text-primary font-medium cursor-pointer"
            onClick={() => {
              navigate(Paths.home);
              closeMenu();
            }}
          >
            dariusz-wrzesień
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-text-primary hover:text-accent-blue transition-colors duration-200 p-2"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={closeMenu}
            />

            {/* Menu Content */}
            <div className="absolute top-full left-0 right-0 bg-background border-b border-stroke shadow-lg z-50">
              <div className="flex flex-col">
                <MobileLink
                  href={Paths.home}
                  name="_hello"
                  isActive={location.pathname === Paths.home}
                  onClick={closeMenu}
                />
                <MobileLink
                  href={Paths.aboutMe.base}
                  name="_about-me"
                  isActive={location.pathname.startsWith(Paths.aboutMe.base)}
                  onClick={closeMenu}
                />
                <MobileLink
                  href={Paths.projects}
                  name="_projects"
                  isActive={location.pathname === Paths.projects}
                  onClick={closeMenu}
                />
                <MobileLink
                  href={Paths.contact}
                  name="_contact-me"
                  isActive={location.pathname === Paths.contact}
                  onClick={closeMenu}
                />
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default HeaderMobile;
