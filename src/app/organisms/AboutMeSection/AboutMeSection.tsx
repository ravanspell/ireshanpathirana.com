/**
 * About me section
 */
import Typography from '../../atoms/Typography/Typography';
import Section from '../../molecules/Section/Section';


const AboutMeSection = ({mainContentRef}:{ mainContentRef: any}): JSX.Element => {
    return (
        <Section mainContentRef={mainContentRef} id='aboutme' headerText='About Me'>
            <Typography
                id="this is id"
                type="dfgdfgdfg"
                tag='p'
                className='text-light-gray'
                text='Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first
                    into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the
                    privilege of building software for an advertising agency, a start-up, a student-led design
                    studio, and a huge corporation.'
            />
            <Typography
                id="this is id"
                type="dfgdfgdfg"
                tag='p'
                className='text-light-gray'
                text="My main focus these days is building products and leading projects for our clients at
                Upstatement. In my free time I've also released an online video course that covers everything
                you need to know to build a web app with the Spotify API."
            />
            <Typography
                id="this is id"
                type="dfgdfgdfg"
                tag='p'
                className='text-light-gray'
                text='When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats,
                or running around Hyrule searching for Korok seeds.'
            />
        </Section>
    );
}

export default AboutMeSection;