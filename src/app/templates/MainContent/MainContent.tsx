/**
 * About me section
 */
import AboutMeSection from '@/app/organisms/AboutMeSection/AboutMeSection';
import ExperinceSection from '@/app/organisms/ExperinceSection/ExpericeSection';
import ProjectsSection from '@/app/organisms/ProjectsSection/ProjectsSection';


const MainContent = ({mainContentRef}:{mainContentRef: any}): JSX.Element => {
    return (
        <main className='bg-custom-eerie-black-2 border border-custom-jet rounded-lg p-8 shadow-custom-shadow-1 z-10'>
            <AboutMeSection mainContentRef={mainContentRef}/>
            <ExperinceSection mainContentRef={mainContentRef}/>
            <ProjectsSection mainContentRef={mainContentRef}/>
        </main>
    );
}

export default MainContent;