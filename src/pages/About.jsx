import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import NavBar from '../components/NavBar';
import { motion } from "framer-motion"

export default function About() {
    // REFS



    return (
        <motion.div className='relative w-full h-full' exit={{ opacity: 0 }}>
            <a href="/"><img src="yellowlog.png" alt="" srcSet="" className='yellow-logo z-10' /></a>
            {/* <span className='line-one z-10' ref={lineOneRef}></span>
            <span className='line-two z-10' ref={lineTwoRef}></span> */}
            <div className='w-full flex flex-col lg:flex-row justify-center items-center place-items-center content-center bg-[#001D3D] h-full gap-y-7 lg:gap-y-0'>
                <div className="flex flex-col justify-center lg:items-center items-center place-items-center content-center lg:w-1/2 w-full ">
                    {/* <div className="title-container flex flex-col justify-center lg:items-start items-center place-items-start content-center">
                        <h1 className='cesar-title lg:text-8xl text-7xl' ref={cesarRef} style={{ opacity: 0 }}>César Iriso</h1>
                        <h2 className='sub-title lg:text-5xl text-5xl'>Full Stack Web Developer<span className='line-animation font-serif self-start place-self-start' ref={lineRef}>|</span></h2>
                    </div> */}
                </div>
                <div className="blob flex flex-row justify-center items-center place-items-center content-center lg:w-1/2 w-full h-1/2">

                </div>
            </div>
            <NavBar />
        </motion.div>
    )
}
