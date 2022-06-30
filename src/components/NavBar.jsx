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
        gsap.from(firstRef.current, { alpha: 0, y: "+100px", duration: 1, onComplete: secondAnimation, ease: "power1" })
    }
    const secondAnimation = () => {
        secondRef.current.style.opacity = 1;
        gsap.from(secondRef.current, { alpha: 0, y: "+100px", duration: 1, onComplete: thirdAnimation, ease: "power1" })
    }
    const thirdAnimation = () => {
        thirdRef.current.style.opacity = 1;
        gsap.from(thirdRef.current, { alpha: 0, y: "+100px", duration: 1, ease: "power1" })
    }

    return (
        <div className='bottom-links w-full absolute bottom-0 flex flex-row justify-around lg:text-4xl text-xl mb-5'>
            <NavLink style={{ opacity: 0 }} ref={firstRef} to="/projects">projects</NavLink>
            <NavLink style={{ opacity: 0 }} ref={secondRef} to="/about">about</NavLink>
            <NavLink style={{ opacity: 0 }} ref={thirdRef} to="/contact">contact</NavLink>
        </div>
    )
}

export default NavBar