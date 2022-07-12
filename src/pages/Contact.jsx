import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import NavBar from '../components/NavBar';
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser';

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

    return (
        <motion.div className='relative w-full h-full' exit={{ opacity: 0 }}>

            <a href="/"><img src="yellowlog.png" alt="" srcSet="" className='yellow-logo z-10' /></a>
            <div className='w-full flex flex-col lg:flex-row justify-center items-center place-items-center content-center bg-[#001D3D] h-full gap-y-7 lg:gap-y-0'>
                <div className="flex flex-col justify-center lg:items-center items-center place-items-center content-center w-full ">
                    <h1 className='text-5xl text-[#ffd60a]'>Contact me</h1>
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col text-4xl text-[#ffd60a] w-1/2">
                        <label className='self-start my-4'>Name</label>
                        <input type="text" name="user_name" className='w-full bg-transparent rounded-lg py-1 px-5 border border-[#ffd60a]' />
                        <label className='self-start my-4'>Email</label>
                        <input type="email" name="user_email" className='bg-transparent rounded-lg py-1 px-5 border border-[#ffd60a]' />
                        <label className='self-start my-4'>Message</label>
                        <textarea name="message" className='bg-transparent rounded-lg py-1 px-5 border border-[#ffd60a]' />
                        <input type="submit" value="Send" className='w-1/2 lg:w-1/4 self-center mt-5 bg-transparent rounded-lg py-1 px-5 border border-[#ffd60a] hover:bg-sky-700 hover:scale-110 transition duration-300 ease-in-out' />
                    </form>
                </div>
            </div>
            <NavBar />
        </motion.div>
    )
}
