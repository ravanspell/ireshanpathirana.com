/**
 * Typography control texts
 */
import './Typography.scss';

export interface TypographyProps {
    /**
     * text content of the typography
     */
    text: string
    /**
     * variant of the text content
     */
    type: 'header' | 'subheader' | 'label'
    /**
     * decoration of the text
     */
    decoration: 'bold' | 'italic' | 'regular'
    /**
     * id of the text element
     * for unit tests and custom styles
     */
    id?: string
    /**
     * Color of the text
     */
    color: string
}

const Typography = (props: TypographyProps): JSX.Element => {
    const { text, id, type, decoration, color } = props;
    return (
        <div
            style={{ color: color }}
            key={id}
            id={id}
            className={`typography-${type}-${decoration}`}
        >
            {text}
        </div>
    );
}

Typography.defaultProps = {
    type: 'base',
    weight: 'regular',
    id: '',
    color: 'white'
};

export default Typography;