/**
 * Main menu item anchor link
 */
export interface MenuItemsProps {
    label: string
    href: string
}

const MenuItem = (props: MenuItemsProps): JSX.Element => {
    const { label, href } = props;

    return (
        <li>
            <a href={href}
                className="
                text-white 
                text-base 
                font-medium 
                transition-colors 
                transform 
                hover:text-orange-yellow-crayola 
                hover:scale-110 
                active:text-orange-yellow-crayola 
                mb-6"
            >
                {label}
            </a>
        </li>
    );
};

export default MenuItem;