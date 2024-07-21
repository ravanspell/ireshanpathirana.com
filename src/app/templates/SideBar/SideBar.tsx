/**
 * Left side bar
 */
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialLinks from "@/app/organisms/SoclialLinks/SoclialLinks";
import Button from "@/app/atoms/Button/Button";
import ProfileImage from "@/app/molecules/ProfileImage/ProfileImage";

const SideBar = (): JSX.Element => {
    return (
        <aside
            id="sidebar"
            className="sticky top-10 w-full md:w-96 bg-custom-eerie-black-2 border border-custom-jet rounded-lg p-7 shadow-custom-shadow-1 z-10"
            aria-label="Main Navigation"
        >
            <div className='flex flex-col items-center gap-10'>
                <ProfileImage id="my-profile-image" src="https://via.placeholder.com/150" />
                <div className="">
                    <h2 className="text-2xl font-bold">Ireshan Pathirana</h2>
                    <p className="text-lg text-gray-400 font-light">Senior Software Engineer</p>
                </div>
                <nav>
                    <ul className="flex flex-col items-center space-y-3">
                        <li><a href="#about" className="text-white text-base font-medium transition-colors transform hover:text-orange-yellow-crayola hover:scale-110 active:text-orange-yellow-crayola mb-6">About</a></li>
                        <li><a href="#portfolio" className="text-white text-base font-medium transition-colors transform hover:text-orange-yellow-crayola hover:scale-110 active:text-orange-yellow-crayola mb-6">Portfolio</a></li>
                        <li><a href="#blog" className="text-white text-base font-medium transition-colors transform hover:text-orange-yellow-crayola hover:scale-110 active:text-orange-yellow-crayola mb-6">Blog</a></li>
                    </ul>
                </nav>
                {/* resume download dropdown */}
                <div className="dropdown-select-wrapper">
                    <Button
                        icon={faDownload}
                        label="Download Resume"
                        onClick={() => { }}
                    />
                </div>
                {/* social media links */}
                <div className="flex items-center mt-10">
                    <SocialLinks
                        socialIconsOptions={[
                            {
                                title: 'gitHub',
                                href: 'https://github.com',
                                icon: faGithub
                            },
                            {
                                title: 'linkedin',
                                href: 'https://linkedin.com',
                                icon: faLinkedin
                            },
                            {
                                title: 'Email to Ireshan',
                                href: "mailto:ireshan@example.com",
                                icon: faEnvelope
                            },
                        ]}
                    />
                </div>
            </div>
        </aside>
    );
}

export default SideBar;
