/**
 * Article card to show my article summary
 */
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
    id?: string
}

function ArticleCard(props: ArticleCardProps) {
    const { date, id} = props;
    return (
        <article key={id} id={id} className='article-card'>
            <time className='article-card__date'  dateTime={date}>
                {date}
            </time>
        </article>
    );
}

ArticleCard.defaultProps = {
    id: ''
};

export default ArticleCard;