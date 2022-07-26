import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import NavBar from '../components/NavBar';
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import FirstSection from '../components/about/FirstSection';
import SecondSection from '../components/about/SecondSection';
import ThirdSection from '../components/about/ThirdSection';
import ForthSection from '../components/about/ForthSection';

export default function About() {
    // REFS

    const content = {
        animate: {
            transition: { staggerChildren: 0.1 },
        },
    };

    const inputs = {
        initial: { y: -20, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    };

    return (
        <motion.div variants={content} animate="animate" initial="initial" className="w-full h-full overflow-x-hidden">
            <a href="/"><img src="yellowlog.png" alt="" srcSet="" className='yellow-logo z-10' /></a>
            {/* <span className='line-one z-10' ref={lineOneRef}></span>
            <span className='line-two z-10' ref={lineTwoRef}></span> */}
            <motion.div variants={inputs} className="mt-48 w-full flex flex-col justify-center zitems-center place-items-center content-center bg-[#001D3D] gap-y-7 lg:gap-y-0">
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <ForthSection />
            </motion.div>

            <NavBar />
        </motion.div >
    )
}
