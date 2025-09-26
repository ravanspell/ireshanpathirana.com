import MenuItem from "@atoms/MenuItem/MenuItem";

/**
 * Main menu items
 */
export interface MainMenuItemsProps {
    menuItems: {
        href: string
        label: string
    }[]
}

const MainMenuItems = (props: MainMenuItemsProps): JSX.Element => {
    const { menuItems } = props;

    return (
        <>
            {
                menuItems.map(({ href, label }) => (
                    <MenuItem
                        key={label}
                        href={href}
                        label={label}
                    />
                ))
            }
        </>
    );
};

export default MainMenuItems;