/**
 * Experience section
 */
import { RefObject } from 'react';
import Section from '../../molecules/Section/Section';
import ExperienceCard from '@/app/molecules/ExperienceCard/ExperienceCard';

type ExperienceSectionProps = {
    mainContentRef: RefObject<Record<string, HTMLElement>>
}

const ExperienceSection = ({ mainContentRef }: ExperienceSectionProps): JSX.Element => {
    return (
        <Section
            headerText='Experience'
            mainContentRef={mainContentRef}
            id='experience'
        >
            <div className='[&:not(:last-child)]:mb-5' >
                <ExperienceCard
                    id='accenture'
                    date="2023 - Present"
                    companyName='Accenture'
                    designation='Senior Software Engineer'
                    shortDescription='uild and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.'
                    technologiesTagLabels={[
                        'JavaScript',
                        'Node.js',
                        'TypeScript',
                        'Rect.js',
                        'Storybook',
                        'Microfrontends',
                        'Redux',
                        'Redux Toolkit',
                        'Jest',
                        'React Testing Library'
                    ]}
                />
                <ExperienceCard
                    id='eyepax-it'
                    date="2021 - 2023"
                    companyName='Eyepax It Consultents'
                    designation='Software Engineer'
                    shortDescription='uild and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.'
                    technologiesTagLabels={[
                        'JavaScript',
                        'Node.js',
                        'TypeScript',
                        'Rect.js',
                        'jest',
                        'React Testing Library',
                        'Next.js',
                        'Storybook',
                        'PHP',
                        'Laravel',
                        'AWS',
                        'Serverless',
                        'Nest.js',
                        'Redux',
                        'Redux Toolkit',
                    ]}
                />
                <ExperienceCard
                    id='axiata-digital-labs'
                    date="2019 - 2021"
                    companyName='Axiata Digital labs'
                    designation='Software Engineer'
                    shortDescription='uild and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.'
                    technologiesTagLabels={[
                        'JavaScript',
                        'Node.js',
                        'TypeScript',
                        'Serverless',
                        'Azure',
                        'Redux',
                        'Redux Saga',
                        'PHP',
                        'Laravel',
                        'Rect.js',
                        'Jest',
                        'React Testing Library',
                        'Storybook',
                    ]}
                />
            </div>
        </Section >
    );
}

export default ExperienceSection;