/**
 * section component for hold section items
 */
import { ReactNode, forwardRef } from 'react';
import Typography from '../../atoms/Typography/Typography';

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
    mainContentRef: React.RefObject<Record<string, HTMLElement>>
}

const Section = (props: SectionProps): JSX.Element => {
    const { id, children, headerText, mainContentRef } = props;
    const handleSetupSectionRef = (ref: HTMLElement | null, id: string) => {
        if (mainContentRef.current && ref) {
            mainContentRef.current[id] = ref
        }
    }
    return (
        <section
            ref={(el) => handleSetupSectionRef(el, id)}
            className='content-section'
            aria-label={id}
            id={id}>
            <div className='content-section__header'>
                <Typography
                    type='ererer'
                    tag='h4'
                    text={headerText}
                    id='section-header-text'
                />
            </div>
            {children}
        </section>
    );
};

export default Section;