import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const FirstSection = ({ text }) => {

    const { inView, entry, ref } = useInView();
    const animationControl = useAnimation();

    if (inView) {
        animationControl.start({
            x: 0,
            transition: {
                delay: 0.7,
            }
        });
    }
    return (

        <div ref={ref} className="overflow-x-hidden w-full">
            <motion.div
                initial={{
                    x: "100vw"
                }}
                animate={animationControl}
                className="box flex flex-row justify-center items-center content-center justify-items-center w-full"
            >
                <div className="w-1/2">
                    <img src="https://thumbs.dreamstime.com/b/serious-computer-programmer-developer-working-office-sitting-desk-coding-project-software-senior-development-187002522.jpg" alt="" srcset="" />
                </div>
                <div className="w-1/2">
                    <h1>AQUI</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non error tempore molestiae voluptate maiores consectetur repudiandae unde amet facilis dicta. Impedit esse voluptatum blanditiis laborum totam velit consequatur vel id.

                    </p>
                </div>
            </motion.div>
        </div>
    )
}
export default FirstSection;