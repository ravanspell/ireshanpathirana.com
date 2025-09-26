import MainMenuItems from "@/app/molecules/MainMenuItems/MainMenuItems";

const NavBar = (): JSX.Element => {

    return (
        <nav className="
            fixed
            md:relative
            p-5
            md:p-0
            bottom-0
            left-0 
            backdrop-blur
            md:backdrop-blur-none
            bg-nav-bar-background
            md:bg-transparent
            rounded-t-[12px]
            md:rounded-none
            border
            md:border-none
            border-custom-jet 
            w-full 
            flex 
            flex-wrap 
            justify-center 
            align-middle 
            z-50"
        >
            <ul className="flex md:flex-col items-center gap-8 md:gap-3">
                <MainMenuItems menuItems={[
                    {
                        href: '#aboutme',
                        label: 'About Me'
                    },
                    {
                        href: '#experience',
                        label: 'Experience'
                    },
                    // {
                    //     href: '#projects',
                    //     label: 'Projects'
                    // }
                ]}
                />
            </ul>
        </nav>
    );
}

export default NavBar;