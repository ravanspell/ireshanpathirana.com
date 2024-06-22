/**
 * About me section
 */


const MainContent = (): JSX.Element => {
    return (
        <div className="left-content">
            <div className="header__content">
                <div className="header__main-content">
                    <h4>Senior Software Engineer at Accenture --- x</h4>

                    <p>full stack developer who deeply love in java scrypt and cloud development</p>

                    <ul id="navbar-example2">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#case-studies">Case studies</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>
                </div>
                <div className="header__social-icons">
                    <ul>
                        <li>Linedin</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
