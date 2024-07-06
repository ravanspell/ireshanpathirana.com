/**
 * Experince section
 */
import Card from '@/app/atoms/Card/Card';
import Typography from '../../atoms/Typography/Typography';
import Section from '../../molecules/Section/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';


const ExperinceSection = ({ mainContentRef }: { mainContentRef: any }): JSX.Element => {
    return (
        <Section mainContentRef={mainContentRef} id='experince' headerText='Experince'>
            <ol className="timeline-list">
                <Card className="[&:not(:last-child)]:mb-5" id="exp">
                <div className='grid grid-flow-row sm:grid-flow-col gap-x-10 gap-y-2'>
                        <span>2010 — 2013</span>
                        <div className='flex flex-col gap-y-2 '>
                            <h4 className="h4 group-hover:text-orange-yellow-crayola">
                                Axiata Digital labs
                                <FontAwesomeIcon className='transition-transform -rotate-45 group-hover:translate-x-3 group-hover:translate-y-3' icon={faArrowRight} />
                            </h4>
                            <h4 className="h4 timeline-item-title">Associate Sofiware Engineer</h4>
                            <Typography
                                id='experince-description-3'
                                type=''
                                tag='p'
                                text='uild and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.'
                            />
                            <div>
                                <span>type script</span>
                                <span>type script</span>
                                <span>type script</span>
                                <span>type script</span>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="[&:not(:last-child)]:mb-5" id="exp 2">
                <div className='grid grid-flow-row sm:grid-flow-col gap-x-10 gap-y-2'>
                        <span>2010 — 2013</span>
                        <div className='flex flex-col gap-y-2 '>
                            <h4 className="h4 group-hover:text-orange-yellow-crayola">
                                Axiata Digital labs
                                <FontAwesomeIcon className='transition-transform -rotate-45 group-hover:translate-x-3 group-hover:translate-y-3' icon={faArrowRight} />
                            </h4>
                            <h4 className="h4 timeline-item-title">Associate Sofiware Engineer</h4>
                            <Typography
                                id='experince-description-3'
                                type=''
                                tag='p'
                                text='uild and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.'
                            />
                            <div>
                                <span>type script</span>
                                <span>type script</span>
                                <span>type script</span>
                                <span>type script</span>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card className="[&:not(:last-child)]:mb-5 group" id="exp 3">
                    <div className='grid grid-flow-row sm:grid-flow-col gap-x-10 gap-y-2'>
                        <span>2010 — 2013</span>
                        <div className='flex flex-col gap-y-2 '>
                            <h4 className="h4 group-hover:text-orange-yellow-crayola">
                                Axiata Digital labs
                                <FontAwesomeIcon className='transition-transform -rotate-45 group-hover:translate-x-3 group-hover:translate-y-3' icon={faArrowRight} />
                            </h4>
                            <h4 className="h4 timeline-item-title">Associate Sofiware Engineer</h4>
                            <Typography
                                id='experince-description-3'
                                type=''
                                tag='p'
                                text='uild and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.'
                            />
                            <div>
                                <span>type script</span>
                                <span>type script</span>
                                <span>type script</span>
                                <span>type script</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </ol>
        </Section>
    );
}

export default ExperinceSection;