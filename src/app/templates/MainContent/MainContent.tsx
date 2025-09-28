/**
 * Main content container
 *
 * consolidate all the sections into the single page
 */
import { RefObject } from 'react';
import AboutMeSection from '@organisms/AboutMeSection/AboutMeSection';
import ExperienceSection from '@organisms/ExperienceSection/ExperienceSection';
import CertificationsSection from '@/app/organisms/Certifications/CertificationsSection';

type MainContentProps = {
  mainContentRef: RefObject<Record<string, HTMLElement>>;
};

const MainContent = ({ mainContentRef }: MainContentProps) => {
  return (
    <main className="bg-custom-eerie-black-2 border border-custom-jet rounded-lg shadow-custom-shadow-1 z-10">
      <AboutMeSection mainContentRef={mainContentRef} />
      <ExperienceSection mainContentRef={mainContentRef} />
      <CertificationsSection mainContentRef={mainContentRef} />
    </main>
  );
};

export default MainContent;
