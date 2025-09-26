import SocialLinkIcon from '@molecules/SocialLinkIcon/SocialLinkIcon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type socialIconsOptions = {
    title: string
    icon: IconProp
    href: string
}

export interface SectionProps {
    /**
     * Icons needs to be displayed
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