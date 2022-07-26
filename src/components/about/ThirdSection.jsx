import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const ThirdSection = ({ text }) => {


    return (

        <div className="overflow-x-hidden w-full flex flex-row justify-center items-center content-center justify-items-center py-10">
            <div className="w-1/2">
                <h3 className="text-5xl text-[#ffd60a]">Hard Skills</h3>
            </div>
            <div className="w-1/2">
                <h3 className="text-5xl text-[#ffd60a]">Soft Skills</h3>
            </div>
        </div>
    )
}
export default ThirdSection;