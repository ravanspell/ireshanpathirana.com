/**
 * About me section
 */
import AboutMeSection from '@/app/organisms/AboutMeSection/AboutMeSection';
import ProjectsSection from '@/app/organisms/ProjectsSection/ProjectsSection';


const MainContent = ({mainContentRef}:{mainContentRef: any}): JSX.Element => {
    return (
        <main className='bg-custom-eerie-black-2 border border-custom-jet rounded-lg p-4 shadow-custom-shadow-1 z-10'>
            <AboutMeSection mainContentRef={mainContentRef}/>
            <ProjectsSection mainContentRef={mainContentRef}/>
        </main>
    );
}

export default MainContent;