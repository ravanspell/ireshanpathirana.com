/**
 * Left side bar
 */
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SocialLinks from '@organisms/SoclialLinks/SoclialLinks';
import Button from '@atoms/Button/Button';
import ProfileImage from '@molecules/ProfileImage/ProfileImage';
import NavBar from '@organisms/NavBar/NavBar';
import Typography from '@atoms/Typography/Typography';
import { Card } from '@/components/ui/card';

const SideBar = () => {
  return (
    <aside
      id="sidebar"
      className="sticky top-10 w-full lg:w-96 z-10"
      aria-label="Main Navigation"
    >
      <Card>
        <div className="flex flex-col items-center gap-10">
          <ProfileImage id="my-profile-image" src="/images/dp.jpeg" />
          <div className="flex flex-col items-center">
            <Typography variant="h2" className="text-3xl font-bold" text="Ireshan Pathirana" />
            <Typography
              as="p"
              className="text-lg text-gray-400 font-light"
              text="Senior Software Engineer"
            />
          </div>
          <NavBar />
          {/* resume download dropdown */}
          <div className="dropdown-select-wrapper">
            <Button
              buttonAttributes={{
                name: 'download resume',
              }}
              icon={faDownload}
              label="Download Resume"
              onClick={() => { }}
            />
          </div>
          {/* social media links */}
          <div className="flex items-center">
            <SocialLinks
              socialIconsOptions={[
                {
                  title: 'gitHub',
                  href: 'https://github.com/ravanspell',
                  icon: faGithub,
                },
                {
                  title: 'linkedin',
                  href: 'https://www.linkedin.com/in/ireshan-pathirana',
                  icon: faLinkedin,
                },
                {
                  title: 'Email to Ireshan',
                  href: 'mailto:ireshan.pathirana@outlook.com',
                  icon: faEnvelope,
                },
              ]}
            />
          </div>
        </div>
      </Card>
    </aside>
  );
};

export default SideBar;
