/**
 * section component for hold section items
 */
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface SectionProps {
    /**
     * text content of the card
     */
    icon: IconProp
    /**
     * id of the social media icon
     * and act as the ey of the root element
     */
    id: string
    /**
     * descriptive title to show when hover
     */
    title: string
    /**
     * link to go
     */
    href: string
}

const SocialLinkIcon = (props: SectionProps): JSX.Element => {
    const { id, icon, title, href } = props;

    return (
        <a
            id={id}
            href={href}
            className="text-light-gray text-2xl transition-colors duration-300 hover:text-white"
            title={title}
        >
            <FontAwesomeIcon icon={icon} />
        </a>
    );
};

export default SocialLinkIcon;