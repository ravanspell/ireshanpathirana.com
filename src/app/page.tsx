"use client"
import MainContent from "./templates/MainContent/MainContent";
import { useRef } from "react";
import SideBar from "./templates/SideBar/SideBar";

export default function Home() {
    const mainContentRef = useRef<Record<string, HTMLElement>>({})
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-5 pb-20 md:pb-0">
                <div className="pt-12">
                    <SideBar />
                </div>
                <div className="pt-12">
                    <MainContent mainContentRef={mainContentRef} />
                </div>
            </div>
        </>
    )
}
