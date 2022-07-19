import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { IoIosMail } from "react-icons/io"
import "./Social.css"

export default function Social() {
    return (
        <>
            <ul>
                <li className='hover:scale-110 transition duration-300 ease-in-out flex flex-row justify-center items-center place-items-center content-center w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]'>
                    <a href="https://github.com/Csriso" target="_blank" rel="noreferrer" className='flex flex-row justify-center items-center place-items-center content-center w-full h-full'>
                        <BsGithub className='w-[35px] h-[35px] lg:w-[70px] lg:h-[70px]' />
                    </a>
                </li>
                <li className='hover:scale-110 transition duration-300 ease-in-out flex flex-row justify-center items-center place-items-center content-center w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]'>
                    <a href="https://www.linkedin.com/in/cesar-iriso/" target="_blank" rel="noreferrer" className='flex flex-row justify-center items-center place-items-center content-center w-full h-full'>
                        <BsLinkedin className='w-[35px] h-[35px] lg:w-[70px] lg:h-[70px]' />
                    </a>
                </li>
                <li className='hover:scale-110 transition duration-300 ease-in-out flex flex-row justify-center items-center place-items-center content-center w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]'>
                    <a href="mailto:cesar.iriso.e@gmail.com?Subject=Portfolio%20|%20Quick%20chat%20from%20(insert%20your%20name)" target="_blank" rel="noreferrer" className='flex flex-row justify-center items-center place-items-center content-center w-full h-full'>
                        <IoIosMail className='w-[35px] h-[35px] lg:w-[70px] lg:h-[70px]' />
                    </a>
                </li>
            </ul>
        </>
    )
}
