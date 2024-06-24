/**
 * Left side bar
 */
import Image from "next/image";

const SideBar = (): JSX.Element => {
    return (
        <aside id="sidebar" className="sticky top-10 w-full md:w-80" aria-label="Main Navigation">
            <div className="relative bg-gradient-to-br from-onyx-600 to-onyx-400 p-3 rounded-full h-36 w-36 mx-auto mb-5">
                <Image fill src="https://via.placeholder.com/150" alt="Profile Avatar" className="rounded-full h-full w-full object-cover" />
            </div>

            <div className="mb-10">
                <h2 className="text-2xl font-bold">Ireshan Pathirana</h2>
                <p className="text-lg text-gray-400 font-light">Senior Software Engineer</p>
            </div>
            <nav>
                <ul className="space-y-3">
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
                    <li><a href="#blog" className="nav-link">Blog</a></li>
                </ul>
            </nav>
            {/* resume download dropdown */}
            <div className="dropdown-select-wrapper">
                <i className="fas fa-download dropdown-select-icon"></i>
                <select className="dropdown-select" aria-label="Download Resume">
                    <option value="" disabled selected>Download Resume</option>
                    <option value="pdf" onClick={() => { }}>PDF Format</option>
                    <option value="word" onClick={() => { }}>Word Format</option>
                </select>
            </div>
            {/* social media links */}
            <div className="mt-10">
                <div className="flex space-x-4 justify-center">
                <a href="https://github.com" className="social-link" title="Github">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com" className="social-link" title="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:ireshan@example.com" className="social-link" title="Email to Ireshan">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </aside>
    );
}

export default SideBar;
