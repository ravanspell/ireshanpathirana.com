/**
 * Article card to show my article summary
 */
import Card from '@/app/atoms/Card/Card';
import Typography from '../../atoms/Typography/Typography';
import './ArticleCard.scss';

export interface ArticleCardProps {
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

const ArticleCard = (props: ArticleCardProps): JSX.Element => {
    const { date, id } = props;
    return (
        <Card id="article-card">
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

export default ArticleCard;