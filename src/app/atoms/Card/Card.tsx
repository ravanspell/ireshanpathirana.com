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
    id: string
}

const Card = (props: CardProps): JSX.Element => {
    const { children, id} = props;
    return (
        <div id={id} className="card">
            {children}
        </div>
    );
}

export default Card;