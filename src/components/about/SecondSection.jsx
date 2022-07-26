import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TagCloud from 'TagCloud';

const SecondSection = ({ text }) => {

    // const { inView, entry, ref } = useInView();
    // const animationControl = useAnimation();

    // if (inView) {
    //     animationControl.start({
    //         x: 0,
    //         transition: {
    //             delay: 0.7,
    //         }
    //     });
    // }

    const container = '.content';
    const texts = [
        'JavaScript', 'CSS3', 'MongoDB', 'ExpressJS', 'React', 'GraphQL', 'NextJS', 'Tailwinds', 'Bootstrap', 'REST API', 'Mongoose', 'SQL', 'PHP'
    ];
    const options = {
        radius: 300,
        // animation speed
        // slow, normal, fast
        maxSpeed: 'fast',
        initSpeed: 'fast',
        // 0 = top
        // 90 = left
        // 135 = right-bottom
        direction: 135,
        // interact with cursor move on mouse out
        keep: true
    };
    useEffect(() => {
        TagCloud(container, texts, options);
    })

    return (

        <div className="overflow-x-hidden w-full flex flex-row justify-center items-center content-center justify-items-center py-10">
            <div className="w-1/2">
                <h3 className="text-5xl text-[#ffd60a]">Hard Skills</h3>
            </div>
            <div className="w-1/2 font-[Roboto] text-white">
                <span className="content w-full flex flex-row justify-center"></span>
            </div>
        </div>
    )
}
export default SecondSection;