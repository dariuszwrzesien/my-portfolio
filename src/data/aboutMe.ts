import Paths from '../Paths';

export interface AboutMeSection {
  href: string;
  label: string;
  iconColor: string;
  sublinks: { href: string; label: string }[];
}

export const aboutMeSections: AboutMeSection[] = [
  {
    href: Paths.aboutMe.bio,
    label: 'bio',
    iconColor: 'text-rose-400',
    sublinks: [
      { href: '#about-me', label: 'about-me' },
      { href: '#skills', label: 'skills' },
    ],
  },
  {
    href: Paths.aboutMe.employment,
    label: 'employment',
    iconColor: 'text-teal-400',
    sublinks: [
      { href: '#euvic', label: 'Euvic' },
      { href: '#fp', label: 'Future Processing' },
      { href: '#simgroep', label: 'SIMgroep' },
      { href: '#spot', label: 'SPOT Group' },
      { href: '#mig', label: 'MIG' },
    ],
  },
  {
    href: Paths.aboutMe.educations,
    label: 'educations',
    iconColor: 'text-indigo-500',
    sublinks: [
      { href: '#certifications', label: 'certifications' },
      { href: '#post-graduate', label: 'post-graduate' },
      { href: '#university', label: 'university' },
    ],
  },
];

// The base about-me route renders the bio subpage, so bio is active there too
export const isAboutMeSectionActive = (pathname: string, href: string) =>
  pathname === href || (href === Paths.aboutMe.bio && pathname === Paths.aboutMe.base);
