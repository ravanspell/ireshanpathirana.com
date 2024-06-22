"use client"
import Image from "next/image";
import MainContent from "./templates/MainContent/MainContent";
import { useRef } from "react";
import NavBar from "./organisms/NavBar/NavBar";

export default function Home() {
    const mainContentRef = useRef<Record<string, HTMLElement>>({})
    return (
        <>
            <NavBar mainContentRef={mainContentRef} />
            <div className="content_wrapper">
                <div className="left-content">
                    <div className="header__main-content">
                        <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
                            {/* <div>
                            <Image
                                width={4}
                                height={4}
                                alt="profile"
                                style={{ height: "4rem", aspectRatio: 1, borderRadius: 'calc(4rem / 2)' }}
                                src="https://media.licdn.com/dms/image/D5603AQFnrwizlSlijw/profile-displayphoto-shrink_800_800/0/1695574016060?e=1701907200&v=beta&t=goFPT9bK4KqpzrBZdVuOiEU3V1LcE0N42QTquvzgYhg" />
                        </div> */}
                            <h1 style={{ fontSize: '25pt' }}>Ireshan Pathirana</h1>
                        </div>
                        <h4>Senior Software Engineer at Accenture</h4>

                        <p>full stack developer who deeply love in java scrypt and cloud development</p>
                    </div>

                    <div>
                        <div className="left-content-border" />
                    </div>
                    <div className="social-icons">
                        <ul>
                            <li><Image
                                width={20}
                                height={20}
                                alt="profile"
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
                            />
                            </li>
                            <li>Github</li>
                        </ul>
                    </div>

                </div>
                <MainContent mainContentRef={mainContentRef} />
            </div>
        </>
    )
}
