"use client"
/**
 * Main nav Bar
 */
import { useEffect, useRef, useState } from 'react';
import './NavBar.scss';
import MainMenuItems from '@/app/molecules/MainMenuItems/MainMenuItems';

const NavBar = ({ mainContentRef }: { mainContentRef: any }): JSX.Element => {

    const observers = useRef<Record<string, IntersectionObserver>>({});
    const [visibleKey, setVisibleKey] = useState<string>('')

    const observerCallback = async (e: any, key: string) => {
        if (e.length && e[0].isIntersecting) {
            setVisibleKey(key);
        }
    };

    useEffect(() => {
        console.log("mainContentRef.current", mainContentRef.current);


        if (Object.keys(mainContentRef.current).length > 0 && observers.current) {
            console.log("mainContentRef.current", mainContentRef.current);
            let options = {  
                // fire intersect observer when 100% of element is inside of the view.
                threshold: 1.0,
            }
            const currentObservers = observers.current;
            Object.keys(mainContentRef.current).forEach((sectionKey: string) => {
                currentObservers[sectionKey] = new IntersectionObserver((e) =>
                    observerCallback(e, sectionKey),
                    options
                );
                if (mainContentRef.current[sectionKey]) {
                    currentObservers[sectionKey].observe(mainContentRef.current[sectionKey]);
                }
            })
        }

        return () => {
            if (observers.current) {
                const currentObservers = observers.current;
                Object.keys(observers.current).forEach((ObserverKey: string) => currentObservers[ObserverKey].disconnect());
            }
        }

    }, [mainContentRef, observers])

    return (
        <header>
            <nav className='nav-bar'>
               <MainMenuItems visibleKey={visibleKey} />
            </nav>
        </header>
    );
}

export default NavBar;