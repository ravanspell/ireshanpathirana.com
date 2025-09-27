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
            w-full 
            flex 
            justify-center 
            items-center 
            gap-2.5 
            px-5 
            py-3.25 
            rounded-[14px] 
            text-vegas-gold
            bg-gradient-onyx 
            capitalize 
            shadow-(--shadow-3)
            z-1 
            hover:text-orange-yellow-crayola
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
