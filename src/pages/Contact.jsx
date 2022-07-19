import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import NavBar from '../components/NavBar';
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import Social from '../components/contact/Social';

export default function Contact() {
    // REFS
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5ulf3gm', 'template_wdjo45r', form.current, '-nAyyaOUbAB1JCRNf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const content = {
        animate: {
            transition: { staggerChildren: 0.1 },
        },
    };

    const title = {
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

    const inputs = {
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

    const social = {
        initial: { y: +20, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    };


    return (
        <motion.div variants={content} animate="animate" initial="initial" class="w-full h-full overflow-hidden">
            <a href="/"><img src="yellowlog.png" alt="" srcSet="" className='yellow-logo z-10' /></a>
            <div className='w-full flex flex-col lg:flex-row justify-center items-center place-items-center content-center bg-[#001D3D] h-full gap-y-7 lg:gap-y-0'>
                <div className="flex flex-col justify-center items-center place-items-center content-center w-full h-full">
                    <motion.div variants={social} class="mx-auto flex flex-col justify-center items-center place-items-center content-center w-full h-full">
                        <Social />
                    </motion.div>

                </div>
                <div className="flex flex-col justify-center items-center place-items-center content-center w-full h-full">
                    <motion.div variants={title} class="flex flex-col text-center w-full mb-4">
                        <h1 className='text-5xl text-[#ffd60a]'>Contact me</h1>
                    </motion.div>
                    <motion.div variants={inputs} class="w-9/12 mx-auto">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col text-4xl text-[#ffd60a] justify-center items-center content-center w-full">
                            <label className='self-start my-4'>Name</label>
                            <input type="text" name="user_name" className='w-full bg-transparent rounded-lg py-1 px-5 border border-[#ffd60a]' />
                            <label className='self-start my-4'>Email</label>
                            <input type="email" name="user_email" className='w-full bg-transparent rounded-lg py-1 px-5 border border-[#ffd60a]' />
                            <label className='self-start my-4'>Message</label>
                            <textarea name="message" className='bg-transparent rounded-lg py-1 px-5 border border-[#ffd60a] w-full' />
                            <input type="submit" value="Send" className='w-1/2 lg:w-1/4 self-center mt-5 bg-transparent rounded-lg py-1 px-5 border border-[#ffd60a] hover:bg-sky-700 hover:scale-110 transition duration-300 ease-in-out' />
                        </form>
                    </motion.div>
                </div>
            </div>
            <NavBar />
        </motion.div>
    )
}
