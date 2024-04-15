import SkillsDesktop from "./SkillsDesktop"
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      staggerChildren: 0.4,
    },
  },
};

const About = () => {

  

  return (
    <motion.div className="bg-gradient-to-b h-full flex flex-col items-center">
      <div className="flex flex-col max-w-[80%] justify-center w-full

      lg:gap-[6vh]">
        <motion.div
          // variants={variants}
          // initial="initial"
          // whileInView="animate"
          className="top-0 left-0 pt-[30px] pb-[30px] font-extrabold text-center"
        >
          <h1 className="text-orange-400 
          text-[50px]
          lg:text-[60px] ">About Me</h1>
        </motion.div>

        <motion.div
          // variants={variants}
          // initial="initial"
          // whileInView="animate"
          className="flex flex-col border-0
          lg:flex-row lg:justify-around lg:gap-[10px] lg:m-0 z-10 rounded-3xl lg:border-[1px] " 
        >
          <div className="flex flex-col gap-[20px] p-[30px] w-full 
          lg:w-1/2">
            <h1 className="items-center text-[30px] 
            lg:text-[1.5vw] font-thin">
              <b> Education </b>
            </h1>

            <motion.div whileHover={{ scale: 1.05 }} className="flex justify-between items-start gap-[20px] h-1/2">
              <img src="./Concordia.png" alt="Concordia University" className="w-[70px] h-[70px]"/>
              <div className="flex flex-col w-1/2">
                <h2 className="text-[20px]
                lg:text-[1vw]">
                  <b>M.Sc.</b> Building Engineering
                </h2>
                <h3 className="text-[1vw] font-light">Concordia University</h3>
                <p className="text-[0.8vw] font-light">GPA 4.1/4.3</p>
              </div>
              <div className="ml-auto text-[0.8vw]">(Jan 2021 - Apr 2023)</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-between items-start gap-[20px] h-1/2"
            >
              <img id="IUST" src="./IUST.png" alt="IUST Icon" className="w-[70px] h-[70px]" />
              <div className="flex flex-col w-1/2">
                <h2 className="text-[1vw]">
                  <b>B.Sc.</b> Mechanical Engineering
                </h2>
                <h3 className="text-[1vw] font-light">Iran University of Science and Technology</h3>
                <p className="text-[0.8vw] font-light">GPA 17.5/20</p>
              </div>
              <div className="ml-auto text-[0.8vw]">(Sep 2016 - Aug 2020)</div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-[20px] p-[30px] w-full 
          lg:w-1/2">
            <h1 className="items-center text-[1.5vw] font-thin">
              <b>Experience</b>
            </h1>

            <motion.div whileHover={{ scale: 1.05 }} className="flex justify-between items-start gap-[20px] h-1/2">
              <img src="./Concordia.png" alt="Concordia University" className="w-[70px] h-[70px]"/>
              <div className="flex flex-col w-1/2">
                <h2 className="text-[1vw]">
                  <b>Machine Learning Researcher</b>
                </h2>
                <h3 className="text-[1vw] font-light">Concordia University</h3>
                <p className="text-[0.8vw] font-light text-justify">
                  Developed a novel Safe Deep Reinforcement Learning
                  (SDRL)approach for optimal dispatch of energy hubs to minimize
                  operational cost and satisfy operational constraints.
                </p>
              </div>
              <div className="ml-auto text-[0.8vw]">(Jan 2021 - Apr 2023)</div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex justify-between items-start gap-[20px] h-1/2">
              <img src="./iranbar.webp" alt="IranBar icon" className="w-[70px] h-[70px]" />
              <div className="flex flex-col w-1/2">
                <h2 className="text-[1vw]">
                  <b>Junior Data Scientist</b>
                </h2>
                <h3 className="text-[1vw] font-light">IranBar</h3>
                <p className="text-[0.8vw] font-light text-justify">
                  Collaborated with cross-functional teams to train, optimize,
                  and deploy data-driven models for delivery price prediction.
                </p>
              </div>
              <div className="ml-auto text-[0.8vw]">(Jun 2019 - May 2020)</div>
            </motion.div>
          </div>
        </motion.div>

        <SkillsDesktop/>
        
      </div>
    </motion.div>
  );
};

export default About;
