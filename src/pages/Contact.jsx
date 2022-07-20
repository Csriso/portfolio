import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar';
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';
import Social from '../components/contact/Social';
import { gsap } from "gsap";
import "./Contact.css"

export default function Contact() {
    // REFS
    const form = useRef();
    const formDivRef = useRef();
    const planeDivRef = useRef();
    const checkMarkRef = useRef();
    const contactMeRef = useRef();
    const formMotionDivRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // emailjs.sendForm('service_5ulf3gm', 'template_wdjo45r', form.current, '-nAyyaOUbAB1JCRNf')
        //     .then((result) => {
        //         console.log(result.text);
        //            gsap.to(contactMeRef.current, { alpha: "0", duration: 1, delay: 0, onComplete: launchPlane });
        //            gsap.to(formMotionDivRef.current, { alpha: "0", duration: 1, delay: 0, onComplete: launchPlane });
        //     }, (error) => {
        //         console.log(error.text);
        //     });

        document.body.style.overflow = "hidden";
        gsap.to(contactMeRef.current, { alpha: "0", duration: 1, delay: 0, onComplete: launchPlane });
        gsap.to(formMotionDivRef.current, { alpha: "0", duration: 1, delay: 0, onComplete: launchPlane });

    };

    const launchPlane = () => {
        planeDivRef.current.style.display = "flex";
        gsap.to(planeDivRef.current, { duration: 3, delay: 0, x: window.innerWidth + 300, y: 100, onComplete: showTick })
        gsap.to(planeDivRef.current, { duration: 3, delay: 0, rotate: "15deg", transformOrigin: "bottom left" })
    }
    const showTick = () => {
        formMotionDivRef.current.style.display = "none";
        contactMeRef.current.style.display = "none";
        planeDivRef.current.style.display = "none";
        checkMarkRef.current.style.display = "";
    }

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
        <motion.div variants={content} animate="animate" initial="initial" className="w-full h-full overflow-hidden">
            <div className="plane overflow-hidden" style={{ overflow: "hidden", display: "none", position: "absolute", left: "-100px", bottom: "0", top: "0", flexDirection: "row", alignItems: "center", zIndex: 30 }} ref={planeDivRef}>
                <svg version="1.1" x="0px" y="0px"
                    width="150px" height="50px" viewBox="0 0 1131.53 379.304" enable-background="new 0 0 1131.53 379.304"
                    className="plane overflow-hidden" >
                    <polygon fill="#D8D8D8" points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223  " />
                    <polygon fill="#C4C4C3" points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102   " />
                </svg>
            </div>

            <a href="/"><img src="yellowlog.png" alt="" srcSet="" className='yellow-logo z-10' /></a>
            <div className='w-full flex flex-col lg:flex-row justify-center items-center place-items-center content-center bg-[#001D3D] h-full gap-y-14 lg:gap-y-0'>
                <div className="flex flex-col justify-center items-center place-items-center content-center w-full h-3/12 lg:h-5/12 lg:h-full">
                    <motion.div variants={social} className="mx-auto flex flex-col justify-center items-center place-items-center content-center w-full h-full">
                        <Social />
                    </motion.div>
                </div>
                <div className="flex flex-col justify-center items-center place-items-center content-center w-full h-9/12 lg:h-7/12 lg:h-full" ref={formDivRef}>
                    <svg style={{ display: "none" }} ref={checkMarkRef} className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>

                    <motion.div variants={title} className="flex flex-col text-center w-full lg:mb-4" ref={contactMeRef}>
                        <h1 className='text-xl lg:text-5xl text-[#ffd60a]'>Contact me</h1>
                    </motion.div>
                    <motion.div variants={inputs} className="w-9/12 mx-auto" ref={formMotionDivRef}>
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col text-xl lg:text-4xl text-[#ffd60a] justify-center items-center content-center w-full">
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
        </motion.div >
    )
}
