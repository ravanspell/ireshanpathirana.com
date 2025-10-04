export interface CardProps {
  /**
   * text content of the card
   */
  children: React.ReactNode;
  /**
   * id of the text element
   * for unit tests and custom styles
   */
  id: string;
  /**
   * pass the custom styles
   */
  className?: string;
}

const Card = (props: CardProps) => {
  const { children, id, className = '' } = props;
  return (
    <div
      id={id}
      className={`${className}
                bg-border-gradient-onyx
                p-4
                rounded-[14px]
                shadow-shadow-2
                cursor-pointer
                z-10
                before:content-['']
                before:absolute
                before:inset-px
                before:bg-gradient-jet
                before:rounded-[14px]
                before:z-[-1]`}
    >
      {children}
    </div>
  );
};

export default Card;
