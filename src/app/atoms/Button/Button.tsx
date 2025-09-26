import { MouseEventHandler } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface SectionProps {
    label: string
    icon: IconProp
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button = (props: SectionProps): JSX.Element => {
    const { label, icon, onClick } = props;

    return (
        <button
            className="
            relative 
            w-full 
            flex 
            justify-center 
            items-center 
            gap-2.5 
            px-5 
            py-3.25 
            rounded-[14px] 
            text-orange-yellow-crayola 
            bg-gradient-onyx 
            capitalize 
            shadow-[var(--shadow-3)] 
            z-[1] 
            transition-[var(--transition-1)] 
            hover:bg-gradient-yellow-1)] 

            before:content-['']
            before:absolute
            before:inset-px
            before:bg-gradient-jet
            before:rounded-[14px]
            before:-z-[1]

            hover:before:bg-gradient-yellow-2
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

export default Button;