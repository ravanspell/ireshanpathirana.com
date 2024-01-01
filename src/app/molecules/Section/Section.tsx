/**
 * section component for hold section items
 */
import { ReactNode } from 'react';
import Typography from '../../atoms/Typography/Typography';
import './Section.scss';

export interface SectionProps {
    /**
     * text content of the card
     */
    children: ReactNode
    /**
     * id of the article card
     * and act as the ey of the root element
     */
    id: string
    /**
     * section header text
     */
    headerText: string
}

const Section = (props: SectionProps): JSX.Element => {
    const { id, children, headerText } = props;
    return (
        <section className='content-section' aria-label={id} id={id}>
            <div className='content-section__header'>
                <Typography
                    type='ererer'
                    tag='h3'
                    text={headerText}
                    id='section-header-text'
                />
            </div>
            {children}
        </section>
    );
}

export default Section;