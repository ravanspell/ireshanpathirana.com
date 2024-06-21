/**
 * Experince card to show my experince summary!
 */
import Card from '../../atoms/Card/Card';
import Typography from '../../atoms/Typography/Typography';
import './ExperienceCard.scss';

export interface ExperienceCardProps {
    /**
     * text content of the card
     */
    date: string
    /**
     * id of the article card
     * and act as the ey of the root element
     */
    id: string
}

const ExperienceCard = (props: ExperienceCardProps): JSX.Element => {
    const { date, id } = props;
    return (
        <Card id={`article-card_${id}`}>
            <article
                key={id}
                id={id}
                className='article'
            >
                <Typography
                    type='ererer'
                    id="article-type"
                    text={date}
                    tag='time'
                    dateTime={date} 
                />
            </article>
        </Card>
    );
}

export default ExperienceCard;