import Image from "next/image";


export default function Home() {
  return (
    <div className="container">
    <div className="content_wrapper">
        <aside className="left-content">
            <div className="header__content">
                <div className="header__main-content">
                    <div style={{display: 'flex', gap: "10px", alignItems: 'center'}}>
                        <div>
                            <Image
                            width={4}
                            height={4}
                            alt="profile"
                            style={{height: "4rem", aspectRatio: 1, borderRadius: 'calc(4rem / 2)'}}
                            src="https://media.licdn.com/dms/image/D5603AQFnrwizlSlijw/profile-displayphoto-shrink_800_800/0/1695574016060?e=1701907200&v=beta&t=goFPT9bK4KqpzrBZdVuOiEU3V1LcE0N42QTquvzgYhg" />
                        </div>
                        <h1 style={{fontSize: '25pt'}}>Ireshan Pathirana</h1>
                    </div>
                    
                    <h4>Senior Software Engineer at Accenture</h4>

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
        </aside>
        <main>
            <section aria-label="about" id="about">
                <p>
                    Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first
                    into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the
                    privilege of building software for an advertising agency, a start-up, a student-led design
                    studio, and a huge corporation.
                </p>
                <p>
                    My main focus these days is building products and leading projects for our clients at
                    Upstatement. In my free time I've also released an online video course that covers everything
                    you need to know to build a web app with the Spotify API.
                </p>
                <p>
                    When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats,
                    or running around Hyrule searching for Korok seeds.
                </p>
            </section>
            <section aria-label="case-studies" id="case-studies">
                <p>
                    Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first
                    into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the
                    privilege of building software for an advertising agency, a start-up, a student-led design
                    studio, and a huge corporation.
                </p>
                <p>
                    My main focus these days is building products and leading projects for our clients at
                    Upstatement. In my free time I've also released an online video course that covers everything
                    you need to know to build a web app with the Spotify API.
                </p>
                <p>
                    When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats,
                    or running around Hyrule searching for Korok seeds.
                </p>
                <p>
                    Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first
                    into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the
                    privilege of building software for an advertising agency, a start-up, a student-led design
                    studio, and a huge corporation.
                </p>
                <p>
                    My main focus these days is building products and leading projects for our clients at
                    Upstatement. In my free time I've also released an online video course that covers everything
                    you need to know to build a web app with the Spotify API.
                </p>
                <p>
                    When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats,
                    or running around Hyrule searching for Korok seeds.
                </p>
            </section>
            <section aria-label="projects" id="projects">
                <p>
                    Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first
                    into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the
                    privilege of building software for an advertising agency, a start-up, a student-led design
                    studio, and a huge corporation.
                </p>
                <p>
                    My main focus these days is building products and leading projects for our clients at
                    Upstatement. In my free time I've also released an online video course that covers everything
                    you need to know to build a web app with the Spotify API.
                </p>
                <p>
                    When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats,
                    or running around Hyrule searching for Korok seeds.
                </p>
                <p>
                    Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first
                    into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the
                    privilege of building software for an advertising agency, a start-up, a student-led design
                    studio, and a huge corporation.
                </p>
                <p>
                    My main focus these days is building products and leading projects for our clients at
                    Upstatement. In my free time I've also released an online video course that covers everything
                    you need to know to build a web app with the Spotify API.
                </p>
                <p>
                    When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats,
                    or running around Hyrule searching for Korok seeds.
                </p>
            </section>
        </main>
    </div>
</div>
  )
}
