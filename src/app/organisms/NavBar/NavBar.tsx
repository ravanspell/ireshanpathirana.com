import MainMenuItems from '@molecules/MainMenuItems/MainMenuItems';

const NavBar = () => {
  return (
    <nav
      className="
            fixed
            lg:relative
            p-5
            lg:p-0
            bottom-0
            left-0 
            backdrop-blur
            lg:backdrop-blur-none
            bg-nav-bar-background
            lg:bg-transparent
            rounded-t-[12px]
            lg:rounded-none
            border
            lg:border-none
            border-custom-jet 
            w-full 
            flex 
            flex-wrap
            justify-center 
            align-middle 
            z-50"
    >
      <ul className="flex lg:flex-col items-center gap-8 lg:gap-3">
        <MainMenuItems
          menuItems={[
            {
              href: '#aboutme',
              label: 'About Me',
            },
            {
              href: '#experience',
              label: 'Experience',
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
};

export default NavBar;
