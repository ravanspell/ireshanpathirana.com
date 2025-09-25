/**
 * Experience section
 */
import Section from '../../molecules/Section/Section';
import ExperienceCard from '@/app/molecules/ExperienceCard/ExperienceCard';


const ExperienceSection = ({ mainContentRef }: { mainContentRef: any }): JSX.Element => {
    return (
        <Section
            mainContentRef={mainContentRef}
            id='experince'
            headerText='Experince'
        >
            <div className='[&:not(:last-child)]:mb-5' >
                <ExperienceCard
                    id='accenture'
                    date="2023 - Present"
                    compaynyName='Accenture'
                    designation='Senior Sofiware Engineer'
                    shortDescription='uild and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.'
                    technlogiesTagLabels={[
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
                    compaynyName='Eyepax It Consultents'
                    designation='Sofiware Engineer'
                    shortDescription='uild and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.'
                    technlogiesTagLabels={[
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
                    id='axiata-digital-labs2'
                    date="2019 - 2021"
                    compaynyName='Axiata Digital labs' 
                    designation='Sofiware Engineer'
                    shortDescription='uild and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.'
                    technlogiesTagLabels={[
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