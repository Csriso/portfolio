import React, { useEffect, useRef } from 'react'
import { NavLink } from "react-router-dom";
import gsap from 'gsap';

function NavBar() {
    const firstRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();

    useEffect(() => {
        navAnimations();
    }, [])

    const navAnimations = () => {
        firstRef.current.style.opacity = 1;
        gsap.from(firstRef.current, { alpha: 0, y: "+100px", duration: 0.5, onComplete: secondAnimation, ease: "power1" })
    }
    const secondAnimation = () => {
        secondRef.current.style.opacity = 1;
        gsap.from(secondRef.current, { alpha: 0, y: "+100px", duration: 0.5, onComplete: thirdAnimation, ease: "power1" })
    }
    const thirdAnimation = () => {
        thirdRef.current.style.opacity = 1;
        gsap.from(thirdRef.current, { alpha: 0, y: "+100px", duration: 0.5, ease: "power1" })
    }

    return (
        <div className='bottom-links w-full fixed bottom-0 flex flex-row justify-around lg:text-4xl text-2xl pb-5 overflow-hidden bg-[#001d3da1] pt-5 lg:pt-0 lg:bg-transparent'>
            <NavLink style={{ opacity: 0 }} ref={firstRef} to="/projects">projects</NavLink>
            <NavLink style={{ opacity: 0 }} ref={secondRef} to="/about">about</NavLink>
            <NavLink style={{ opacity: 0 }} ref={thirdRef} to="/contact">contact</NavLink>
        </div>
    )
}

export default NavBar