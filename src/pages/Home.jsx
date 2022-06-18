import React, { useEffect, useRef } from 'react'
import './Home.css'
import { gsap } from "gsap";
import { CustomEase } from 'gsap/all';

export default function Home() {
    const lineRef = useRef();
    const logoRef = useRef();
    const lineOneRef = useRef();
    const lineTwoRef = useRef();
    useEffect(() => {
        launchAnimations();
    }, []);

    const launchAnimations = () => {
        gsap.to(lineRef.current,
            {
                alpha: 0, duration: 0.4, repeat: -1, yoyo: true,
                ease: CustomEase.create("custom", "M0,0,C0.498,0,0.356,0,0.5,0,0.492,0.506,0.5,0,0.5,1,1,1,0.891,1,1,1")
            })
        gsap.to(logoRef.current, { rotation: "+=360", duration: 2, yoyo: true, ease: "elastic", repeat: -1 });
        gsap.set(lineOneRef.current, { transformOrigin: "50% 100%" });
        gsap.set(lineTwoRef.current, { transformOrigin: "100% 50%" });
        gsap.from(lineOneRef.current, { height: "0px", duration: 1, delay: 1 })
        gsap.from(lineTwoRef.current, { width: "0px", duration: 1, delay: 1.2 })
    }


    return (
        <div className='relative w-full h-full'>
            <img src="yellowlog.png" alt="" srcset="" className='yellowLogo z-10' ref={logoRef} />
            <span className='lineOne z-10' ref={lineOneRef}></span>
            <span className='lineTwo z-10' ref={lineTwoRef}></span>
            <div className='absolute top-0 left-0 w-full flex flex-row justify-center items-center place-items-center content-center bg-[#001D3D] h-full'>
                <div className="flex flex-col justify-center items-center place-items-center content-center w-1/2">
                    <div className="title-container flex flex-col justify-center items-start place-items-start content-center">
                        <h1 className='cesarTitle'>César Iriso</h1>
                        <h2 className='subTitle pt-5 pl-2'>Full Stack Web Developer<span className='line-animation font-serif self-start place-self-start' ref={lineRef}>|</span></h2>

                    </div>
                </div>
                <div className="blob flex flex-row justify-center items-center place-items-center content-center w-1/2">
                    <img src='yellowblob.svg' alt="some file" height='680' width='789' />
                </div>
            </div>
        </div>
    )
}
