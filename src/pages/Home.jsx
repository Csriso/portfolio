import React, { useEffect, useRef } from 'react'
import './Home.css'
import { gsap } from "gsap";
import { CustomEase } from 'gsap/all';
import TextPlugin from 'gsap/src/TextPlugin';
import NavBar from '../components/NavBar';

export default function Home() {
    // REFS
    const lineRef = useRef();
    const logoRef = useRef();
    const lineOneRef = useRef();
    const lineTwoRef = useRef();
    const cesarRef = useRef();

    gsap.registerPlugin(TextPlugin, CustomEase);

    useEffect(() => {
        launchAnimations();
    }, []);

    const launchAnimations = () => {
        gsap.to(lineRef.current,
            {
                alpha: 0, duration: 0.4, repeat: -1, yoyo: true,
                ease: CustomEase.create("custom", "M0,0,C0.498,0,0.356,0,0.5,0,0.492,0.506,0.5,0,0.5,1,1,1,0.891,1,1,1")
            })
        gsap.to(logoRef.current, { rotation: "+=360", duration: 2, yoyo: true, ease: "elastic", repeat: -1 });
        // gsap.set(lineOneRef.current, { transformOrigin: "50% 100%" });
        // gsap.set(lineTwoRef.current, { transformOrigin: "100% 50%" });
        gsap.from(lineOneRef.current, { alpha: "0", duration: 1, delay: 1 })
        gsap.from(lineTwoRef.current, { alpha: "0", duration: 1, delay: 1.2 })
        nameAnimation();
    }
    const nameAnimation = () => {
        cesarRef.current.innerText = "";
        cesarRef.current.style.opacity = 1;
        gsap.to(cesarRef.current, { duration: 10, onComplete: start, text: { value: "César Iriso", speed: 1 }, ease: "elastic" });
    }
    const start = () => {
        gsap.to(cesarRef.current, { duration: 10, text: { value: "César Iriso", speed: 1 }, ease: "elastic" });
        console.log("complete");
    }

    return (
        <div className='relative w-full h-full'>
            <img src="yellowlog.png" alt="" srcSet="" className='yellow-logo z-10' ref={logoRef} />
            <span className='line-one z-10' ref={lineOneRef}></span>
            <span className='line-two z-10' ref={lineTwoRef}></span>
            <div className='w-full flex flex-col flex-wrap lg:flex-row justify-center items-center place-items-center content-center bg-[#001D3D] h-full'>
                <div className="flex flex-col justify-center lg:items-end items-center place-items-center content-center lg:w-1/2 w-full">
                    <div className="title-container flex flex-col justify-center md:items-start items-center place-items-start content-center">
                        <h1 className='cesar-title lg:text-4xl text-3xl' ref={cesarRef} style={{ opacity: 0 }}>César Iriso</h1>
                        <h2 className='sub-title lg:text-4xl text-3xl'>Full Stack Web Developer<span className='line-animation font-serif self-start place-self-start' ref={lineRef}>|</span></h2>

                    </div>
                </div>
                <div className="blob flex flex-row justify-center items-center place-items-center content-center lg:w-1/2 w-full">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="800" id="blobSvg" style={{ opacity: 1 }}>
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ "stopColor": "rgb(255, 214, 10)" }}></stop>
                                <stop offset="100%" style={{ "stopColor": "rgb(255, 214, 10)" }}></stop>
                            </linearGradient>
                        </defs>
                        <clipPath id="myClip" clipPathUnits="objectBoundingBox">
                            <path id="blob" fill="rgb(255, 214, 10)" style={{ opacity: 1 }} transform="scale(0.00170,0.0019)">
                                <animate attributeName="d" dur="8200ms" repeatCount="indefinite" values="M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;M409,303.5Q416,357,378,402Q340,447,282,439Q224,431,187,398.5Q150,366,105.5,335.5Q61,305,45,245Q29,185,59,124.5Q89,64,152.5,40Q216,16,265,63.5Q314,111,383,115.5Q452,120,427,185Q402,250,409,303.5Z;M415.01911,310.8863Q439.5452,371.7726,388.0904,405.2945Q336.6356,438.8164,280.7726,433.452Q224.9096,428.08761,185.95759,398.74511Q147.00559,369.40261,129.05219,330.15471Q111.09878,290.9068,102.89189,247.863Q94.68499,204.8192,97.4315,140.3164Q100.17801,75.81361,160.4068,60.51771Q220.6356,45.22181,275.226,60.1356Q329.8164,75.04939,372.9534,109.3658Q416.0904,143.6822,403.29171,196.8411Q390.49301,250,415.01911,310.8863Z;M432.03478,297.56957Q398.46218,345.13914,356.36479,367.83696Q314.26739,390.53478,267.26739,423.085Q220.26739,455.63521,175.78826,421.28282Q131.30913,386.93043,88.83152,348.48609Q46.35391,310.04174,68.21174,256.28131Q90.06957,202.52087,95.17544,139.65457Q100.28131,76.78826,162.38717,74.23956Q224.49304,71.69087,270.52087,88.04326Q316.5487,104.39565,381.35239,113.97913Q446.15608,123.56261,455.88173,186.78131Q465.60739,250,432.03478,297.56957Z;M440.89145,308.17188Q431.49014,366.34375,386.51892,408.54441Q341.5477,450.74507,280.86143,454.67188Q220.17516,458.59868,161.4046,439.6065Q102.63404,420.61431,74.24712,365.23068Q45.86019,309.84704,51.25164,251.37253Q56.64309,192.89803,94.98232,154.25946Q133.32155,115.62089,180.13528,103.21957Q226.94901,90.81826,286.5366,64.96012Q346.12418,39.10197,382.33594,90.33923Q418.5477,141.57648,434.42023,195.78824Q450.29277,250,440.89145,308.17188Z;M456.0768,303.76136Q418.13543,357.52271,379.98225,404.29316Q341.82907,451.0636,284.01817,433.65772Q226.20727,416.25185,163.99091,418.54046Q101.77456,420.82907,62.72047,368.86953Q23.66638,316.90999,61.99091,261.65772Q100.31545,206.40545,118.97771,163.62635Q137.63998,120.84725,179.51817,86.26136Q221.39637,51.67547,267.19818,81.83773Q313,112,367.68455,125.86045Q422.36911,139.7209,458.19364,194.86045Q494.01817,250,456.0768,303.76136Z;M437.20545,311.82292Q441.89352,373.64584,380.77431,387.66608Q319.65509,401.68633,271.82754,416.34317Q224,431,184.22569,401.27431Q144.45139,371.54861,81.45601,344.74769Q18.46064,317.94676,58.87153,261.64584Q99.28242,205.34491,102.46413,144.38253Q105.64584,83.42014,164.05961,69.5926Q222.47338,55.76506,274.24769,69.97338Q326.02199,84.18171,376.989,109.95139Q427.95601,135.72107,430.23669,192.86053Q432.51737,250,437.20545,311.82292Z;M440.79254,295.90011Q393.21514,341.80021,357.53347,375.20746Q321.85181,408.61471,271.82218,427.01866Q221.79254,445.4226,171.55544,422.09659Q121.31834,398.77057,68.79254,358.84083Q16.26674,318.91109,38.15202,256.60373Q60.03731,194.29637,79.65586,134.88912Q99.27441,75.48187,157.19648,42.12622Q215.11855,8.77057,268.67782,50.11855Q322.2371,91.46653,362.16684,121.87761Q402.09659,152.2887,445.23326,201.14435Q488.36994,250,440.79254,295.90011Z;M430.80624,308.72934Q432.1339,367.45868,372.72647,377.66948Q313.31905,387.88027,263.72647,442.80911Q214.1339,497.73795,154.61821,463.08837Q95.10253,428.43879,60.15953,372.16526Q25.21653,315.89174,60.3661,260.16239Q95.51568,204.43305,120.04418,166.21939Q144.57268,128.00574,181.94874,82.19376Q219.32479,36.38179,273.74216,57.19376Q328.15953,78.00574,384.05413,102.85329Q439.94874,127.70084,434.71366,188.85042Q429.47858,250,430.80624,308.72934Z;M394.89432,291.86359Q379.96349,333.72718,354.5999,379.04899Q329.23631,424.37079,274.96542,439.22911Q220.69452,454.08742,185.59462,409.0927Q150.49472,364.09798,125.7075,328.96349Q100.92028,293.82901,59.42363,237.80355Q17.92698,181.77809,66.30163,137.5999Q114.67627,93.42171,168.36359,75.4145Q222.05091,57.4073,282.76369,51.5999Q343.47647,45.7925,374.93276,97.57444Q406.38905,149.35639,408.1071,199.67819Q409.82516,250,394.89432,291.86359Z;M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z">
                                </animate>
                            </path>
                        </clipPath>
                        <image width="550" height="550" preserveAspectRatio="xMidYMid meet" clipPath="url(#myClip)" href="test2.png" ></image>
                    </svg>
                </div>
            </div>
            <NavBar />
        </div >
    )
}
