import { ButtonHTMLAttributes, MouseEventHandler } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface SectionProps {
  label: string;
  icon: IconProp;
  onClick: MouseEventHandler<HTMLButtonElement>;
  buttonAttributes?: ButtonHTMLAttributes<HTMLButtonElement>;
  testId?: string;
}

const Button = (props: SectionProps) => {
  const { label, icon, onClick, buttonAttributes, testId } = props;

  return (
    <button
      data-testid={testId}
      className="
           relative 
           justify-center 
           cursor-pointer 
           inline-flex 
           items-center 
           space-x-2 
           text-center 
           font-regular 
           ease-out
           rounded-md 
           outline-none 
           transition-all 
           outline-0 
           focus-visible:outline-4 
           focus-visible:outline-offset-1 
           border
           text-foreground
           bg-secondary
           hover:bg-accent
            border-border
            hover:border-border-stronger
            focus-visible:outline-ring
            text-xs
            px-2.5
            py-1

            hover:text-primary
            transition-colors
            duration-300
            cursor-pointer
            "
      type="button"
      onClick={onClick}
      {...buttonAttributes}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
    </button>
  );
};

export default Button;
