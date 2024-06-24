/**
 * section component for hold section items
 */
import { ReactNode } from 'react';
import Typography from '../../atoms/Typography/Typography';
import './Section.css';

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
            className="section mb-20 scroll-mt-10"
            aria-label={id}
            id={id}
            >
            <header className="relative pb-2 mb-6">
                <Typography
                    type='ererer'
                    tag='h2'
                    className='section-header-text uppercase text-md font-bold'
                    text={headerText}
                    id='section-header-text'
                />
            </header>
            {children}
        </section>
    );
};

export default Section;