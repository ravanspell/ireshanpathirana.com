/**
 * About me section
 */
import AboutMeSection from '@/app/organisms/AboutMeSection/AboutMeSection';
import ExperinceSection from '@/app/organisms/ExperinceSection/ExpericeSection';
import ProjectsSection from '@/app/organisms/ProjectsSection/ProjectsSection';
import './MainContent.scss';


const MainContent = ({mainContentRef}:{mainContentRef: any}): JSX.Element => {
    return (
        <main>
            <AboutMeSection mainContentRef={mainContentRef}/>
            <ExperinceSection mainContentRef={mainContentRef}/>
            <ProjectsSection mainContentRef={mainContentRef}/>
        </main>
    );
}

export default MainContent;