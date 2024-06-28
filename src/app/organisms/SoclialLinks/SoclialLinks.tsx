/**
 * section component for hold section items
 */
import SocialLinkIcon from '@/app/molecules/SocialLinkIcon/SocialLinkIcon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type socialIconsOptions = {
    title: string
    icon: IconProp
    href: string
}

export interface SectionProps {
    /**
     * 
     */
    socialIconsOptions: socialIconsOptions[]
}

const SocialLinks = (props: SectionProps): JSX.Element => {
    const { socialIconsOptions } = props;

    return (
        <div className="flex space-x-4 justify-center">
            {socialIconsOptions.map(({ href, icon, title }) => (
                <SocialLinkIcon
                    key={title}
                    id={`social-icon-${title.split(' ').join('-')}`}
                    href={href}
                    icon={icon}
                    title={title}
                />
            ))}
        </div>
    );
};

export default SocialLinks;