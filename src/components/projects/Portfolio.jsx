import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ProjectOne from "./ProjectOne";
import ProjectOneMobile from "./ProjectOneMobile";

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div id="Projects" className="relative bg-gradient-to-a" ref={ref}>
      <div className="sticky top-0 left:0 text-[2rem]
            pt-5
            pb-10
            sm:pb-0
            md:pb-5
          sm:text-[2rem]
          lg:text-[2.5rem]
          2xl:text-[4rem] text-center text-orange-400 md:text-[60px] font-bold ">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="h-[10px] bg-white"></motion.div>
      </div>
      <div className="hidden xl:block">
      <ProjectOne />
      </div>
      <div className="xl:hidden">
      <ProjectOneMobile />
      </div>
    </div>
  );
};

export default Portfolio;
