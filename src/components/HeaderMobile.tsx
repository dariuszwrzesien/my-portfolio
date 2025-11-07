import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import Paths from '../Paths';
import { cn } from '../libs/utils';

interface MobileLinkProps {
  href: string;
  name: string;
  isActive: boolean;
  onClick: () => void;
}

const MobileLink = ({ href, name, isActive, onClick }: MobileLinkProps) => {
  return (
    <Link
      to={href}
      onClick={() => onClick()}
      className={cn(
        'w-full text-left px-4 py-3 border-b border-stroke transition-all duration-400 hover:text-heading-foreground',
        {
          'text-heading-foreground': isActive,
        }
      )}
    >
      {name}
    </Link>
  );
};

const ANIMATION_DURATION = 500;

const HeaderMobile = ({ className }: { className?: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMenuOpen) {
      setMenuVisible(true);
      setMenuClosing(false);
      return;
    }
    if (menuVisible) {
      setMenuClosing(true);
      const timeoutId = setTimeout(() => {
        setMenuVisible(false);
        setMenuClosing(false);
      }, ANIMATION_DURATION);
      return () => clearTimeout(timeoutId);
    }
  }, [isMenuOpen, menuVisible]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={cn('bg-background border border-stroke relative z-50', className)}>
        <nav className="flex justify-between items-center">
          <div
            className={cn(
              'border-b-3 border-b-background border-r-text-slate text-md text-center py-4 custom-sidebar-width cursor-default',
              isMenuOpen ? 'invisible' : ''
            )}
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
            className="text-text-primary cursor-pointer hover:text-accent-blue transition-colors duration-200 px-8"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {menuVisible && (
          <>
            <div
              className={cn(
                'fixed bg-background z-40 transition-opacity duration-300',
                isMenuOpen && !menuClosing ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              )}
              onClick={closeMenu}
            />
            <div
              className={cn(
                'absolute top-full left-0 right-0 bg-background border-b border-stroke shadow-lg z-50 transition-all duration-300',
                isMenuOpen && !menuClosing
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-4 pointer-events-none'
              )}
            >
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
