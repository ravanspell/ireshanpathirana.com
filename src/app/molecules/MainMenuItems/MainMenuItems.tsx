/**
 * section component for hold section items
 */

export interface MainMenuItemsProps {
    visibleKey: string
}

const MainMenuItems = (props: MainMenuItemsProps): JSX.Element => {
    const {visibleKey} = props;
    return (
        <>
            <a className={`nav-link ${visibleKey === 'about-me' ? 'active' : ''}`} href="#about-me">About Me</a>
            <a className={`nav-link ${visibleKey === 'experince' ? 'active' : ''}`} href="#experince">Experince</a>
            <a className={`nav-link ${visibleKey === 'projects' ? 'active' : ''}`} href="#projects">Projects</a>
        </>
    );
};

export default MainMenuItems;