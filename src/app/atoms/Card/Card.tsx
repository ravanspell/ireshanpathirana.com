/**
 * Typography control texts
 */
import './Card.scss';

export interface CardProps {
    /**
     * text content of the card
     */
    children: React.ReactNode
    /**
     * id of the text element
     * for unit tests and custom styles
     */
    id?: string
}

function Card(props: CardProps) {
    const { children, id} = props;
    return (
        <div id={id} className={"card"}>
            {children}
        </div>
    );
}

Card.defaultProps = {
    id: ''
};

export default Card;