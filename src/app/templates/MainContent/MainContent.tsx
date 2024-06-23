/**
 * About me section
 */
import AboutMeSection from '@/app/organisms/AboutMeSection/AboutMeSection';
import ProjectsSection from '@/app/organisms/ProjectsSection/ProjectsSection';


const MainContent = ({mainContentRef}:{mainContentRef: any}): JSX.Element => {
    return (
        <main>
            <AboutMeSection mainContentRef={mainContentRef}/>
            <ProjectsSection mainContentRef={mainContentRef}/>
        </main>
    );
}

export default MainContent;