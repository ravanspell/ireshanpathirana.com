/**
 * About me section
 */
import Typography from '../../atoms/Typography/Typography';
import Section from '../../molecules/Section/Section';


const ExperinceSection = ({ mainContentRef }: { mainContentRef: any }): JSX.Element => {
    return (
        <Section mainContentRef={mainContentRef} id='experince' headerText='Experince'>
            <ol className="timeline-list">
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Senior Sofiware Engineer</h4>
                    <span>2015 — Present</span>
                    <Typography
                        id='experince-description-1'
                        type=''
                        tag='p'
                        text='Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas
                        molestias
                        exceptur.'
                    />
                </li>
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Sofiware Engineer</h4>
                    <span>2013 — 2015</span>
                    <Typography
                        id='experince-description-2'
                        type=''
                        tag='p'
                        text='Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                        quas molestias
                        exceptur.'
                    />
                </li>
                <li className="timeline-item">
                    <h4 className="h4 timeline-item-title">Associate Sofiware Engineer</h4>
                    <span>2010 — 2013</span>
                    <Typography
                        id='experince-description-3'
                        type=''
                        tag='p'
                        text='Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                        quas molestias
                        exceptur.'
                    />
                </li>
            </ol>
        </Section>
    );
}

export default ExperinceSection;