/**
 * Typography control texts
 * component allows 
 */
import { ElementType } from 'react';
import './Typography.scss';

type TypographyIntrinsicElement = 'div' | 'time' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';

type TypographyProps<T extends TypographyIntrinsicElement> = {
    /**
     * text content of the typography
     */
    text: string
    /**
     * variant of the text content
     */
    type: string,
    /**
     * HTML tag definition
     */
    tag?: T
    /**
     * decoration of the text
     */
    decoration?: 'bold' | 'italic' | 'regular'
    /**
     * id of the text element
     * for unit tests and custom styles
     */
    id: string
    /**
     * axilary classname
     */
    className?: string
} & JSX.IntrinsicElements[T];

const Typography = <T extends TypographyIntrinsicElement = 'div'>(props: TypographyProps<T>): JSX.Element => {
    const {
        text,
        id,
        tag: elementType = "div" as T,
        decoration,
        className,
        type,
        ...rest
    } = props;
    const Component = elementType as ElementType;
    return (
        <Component
            {...rest}
            className={`typography-${type}-${decoration} ${className}`}
            id={id}
        >
            {text}
        </Component>
    );
}

Typography.defaultProps = {
    className: '',
};

export default Typography;