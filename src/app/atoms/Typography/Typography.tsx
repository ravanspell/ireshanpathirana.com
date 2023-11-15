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
    decoration: 'bold' | 'italic' | 'regular'
    /**
     * id of the text element
     * for unit tests and custom styles
     */
    id?: string
}

function Typography(props: TypographyProps) {
    const { text, id, type, decoration } = props;
    return (
        <div
        
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
    id: ''
};

export default Typography;