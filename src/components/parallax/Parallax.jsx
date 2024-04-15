import { motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";
import { LuArrowDownToLine } from "react-icons/lu";
import "./parallax.css";

const scrollButtonEffect = {
  opacity: 0,
  y: 10,
  transition: {
    duration: 2,
    repeat: Infinity,
  },
};

const heroImageInview = {
    y: [0, 20, -20, 0],
    rotate: [0, 8, -8, 0],
    transition: {
      duration: 20,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },}

const Parallax = ({ type }) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const yBg = useTransform(scrollYProgress,[0,1], ["0%", "100%"])
    const yText = useTransform(scrollYProgress,[0,1], ["0%", "500%"])
    

  return (
    <div
      className="w-full h-full relative flex items-center flex-col justify-center overflow-hidden bg-gradient-to-a "
      ref={ref}
    >
      <motion.h1 style={{y: yText}} className="text-5xl font-bold mb-[10%] text-center md:text-7xl lg:text-9xl z-50">
        
        Who Am I ?!
        <br />
        
      </motion.h1>

      <motion.div animate={scrollButtonEffect} className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl">
          <LuArrowDownToLine style={{ marginTop: "5%" }} />
        </motion.div>

      <motion.div className="mountains"></motion.div>
      <motion.div animate={heroImageInview} style={{y: yBg}} className="planets bg-no-repeat bg-contain sm:bg-cover"></motion.div>
      <motion.div  style={{x: yBg}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
