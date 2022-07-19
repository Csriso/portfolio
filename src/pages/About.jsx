import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import NavBar from '../components/NavBar';
import { motion } from "framer-motion"

export default function About() {
    // REFS



    return (
        <motion.div className='relative w-full h-full overflow-hidden' exit={{ opacity: 0 }}>
            <a href="/"><img src="yellowlog.png" alt="" srcSet="" className='yellow-logo z-10' /></a>
            {/* <span className='line-one z-10' ref={lineOneRef}></span>
            <span className='line-two z-10' ref={lineTwoRef}></span> */}
            <div className='w-full flex flex-col lg:flex-row justify-center zitems-center place-items-center content-center bg-[#001D3D] h-full gap-y-7 lg:gap-y-0 overflow-auto'>
                <div className="content">

                </div>
            </div>
            <NavBar />
        </motion.div>
    )
}
