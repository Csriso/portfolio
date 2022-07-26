import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import NavBar from '../components/NavBar';
import { motion } from "framer-motion"

export default function Projects() {
    // REFS
    const content = {
        animate: {
            transition: { staggerChildren: 0.1 },
        },
    };

    const cards = {
        initial: { y: -20, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    };

    return (
        <motion.div variants={content} animate="animate" initial="initial" className="w-full h-full overflow-x-hidden">
            <a href="/"><img src="yellowlog.png" alt="" srcSet="" className='yellow-logo z-10' /></a>
            <motion.div variants={cards} class="flex flex-col py-32 lg:py-0 gap-y-10 lg:gap-y-0 lg:flex-row flex-wrap lg:gap-5 justify-center items-center place-items-center content-center w-full lg:h-full font-['Roboto']">
                <div class="flex flex-row justify-center w-3/4 lg:w-1/4">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img class="rounded-t-lg" src="/ironminer2.png" alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">IronMiner</h5>
                            <p class="text-gray-700 text-base mb-4">
                                Arcade minigame developed as first project of the Ironhack bootcamp
                            </p>
                            <a href='https://csriso.github.io/iron-miner/' class="hover:scale-110 transition duration-300 ease-in-out inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">Visit</a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row justify-center w-3/4 lg:w-1/4">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img class="rounded-t-lg" src="/wordgym.png" alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">WordGym</h5>
                            <p class="text-gray-700 text-base mb-4">
                                App with collections of words to train your english pronunciation
                            </p>
                            <a href='https://word-gym.herokuapp.com/' class="hover:scale-110 transition duration-300 ease-in-out inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">Visit</a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row justify-center w-3/4 lg:w-1/4">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">
                        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            <img class="rounded-t-lg" src="/wevape.png" alt="" />
                        </a>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2">WeVape</h5>
                            <p class="text-gray-700 text-base mb-4">
                                Social network to share things related to vaping
                            </p>
                            <a href='https://wevape-ironhack.netlify.app/' class="hover:scale-110 transition duration-300 ease-in-out inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">Visit</a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <NavBar />
        </motion.div>
    )
}
