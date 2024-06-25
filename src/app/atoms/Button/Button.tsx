/**
 * section component for hold section items
 */
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEventHandler } from 'react';

export interface SectionProps {
    /**
     * 
     */
    label: string
    icon: IconProp
    onClick: MouseEventHandler<HTMLButtonElement>
}

const SocialLinks = (props: SectionProps): JSX.Element => {
    const { label, icon, onClick } = props;

    return (
        <button
            className="
            form-btn 
            relative 
            w-full 
            flex 
            justify-center 
            items-center 
            gap-2.5 
            px-5 
            py-3.25 
            rounded-[14px] 
            text-[var(--orange-yellow-crayola)] 
            bg-[var(--border-gradient-onyx)] 
            text-[var(--fs-6)] 
            capitalize 
            shadow-[var(--shadow-3)] 
            z-1 
            transition-[var(--transition-1)] 
            hover:bg-[var(--bg-gradient-yellow-1)] 
            disabled:opacity-70 
            disabled:cursor-not-allowed 
            disabled:hover:bg-[var(--border-gradient-onyx)]
            "
            type='button'
            onClick={onClick}
        >
            <FontAwesomeIcon icon={icon} />
            {label}
            <span
                className="
                absolute 
                inset-[1px]
                rounded-inherit z-[-1] 
                transition-[var(--transition-1)] 
                hover:bg-[var(--bg-gradient-yellow-2)] 
                disabled:hover:bg-[var(--bg-gradient-jet)]
                "
            >
            </span>
        </button>

    );
};

export default SocialLinks;