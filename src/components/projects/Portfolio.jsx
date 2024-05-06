import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ProjectOne from "./ProjectOne/ProjectOne";
import ProjectTwo from "./ProjectTwo/ProjectTwo";
import ProjectOneMobile from "./ProjectOne/ProjectOneMobile";
import ProjectTwoMobile from "./ProjectTwo/ProjectTwoMobile";

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
    <div id="Projects" className="relative bg-gradient-to-b sm:bg-gradient-to-a" ref={ref}>
      <div className="sticky top-0 left:0 text-[2rem]
            pt-5
            pb-10
            sm:pb-0
            md:pb-5
            h-[100px]
          sm:text-[2rem]
          lg:text-[2.5rem]
          2xl:text-[4rem] text-center md:text-[60px] font-bold ">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class=" text-orange-400">Projects</span></h1>
        <motion.div style={{ scaleX }} className="h-[10px] bg-white"></motion.div>
      </div>
      <div className="hidden xl:block">
      <ProjectOne />
      </div>
      
      <div className="xl:hidden bg-gradient-to-b">
      <ProjectOneMobile />
      </div>
      
      <div className="hidden xl:block">
      <ProjectTwo />
      </div>

      <div className="xl:hidden bg-gradient-to-a">
      <ProjectTwoMobile/>
      </div>
    </div>
  );
};

export default Portfolio;
