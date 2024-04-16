import SkillsDesktop from "./SkillsDesktop";
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
      <div
        className="flex flex-col max-w-[80%] justify-center w-full
        
      sm:gap-[30px]
      lg:gap-[1vh]"
      >
        <motion.div
          // variants={variants}
          // initial="initial"
          // whileInView="animate"
          className="top-0 left-0 sm:pt-[30px] sm:pb-[30px] pt-[20px] pb-[20px]  font-extrabold text-center"
        >
          <h1
            className="text-orange-400 
            text-[40px]
          sm:text-[50px]
          lg:text-[60px] "
          >
            About Me
          </h1>
        </motion.div>

        <motion.div
          // variants={variants}
          // initial="initial"
          // whileInView="animate"
          className="flex flex-col
          gap-[1vh]
          lg:flex-row lg:justify-around lg:gap-[10px] lg:m-0 z-10 rounded-3xl lg:border-[1px] lg:h-1/2 "
        >
          <div
            className="flex flex-col 
            gap-[1vh]
          md:gap-[10px] md:p-[10px] w-full 
          lg:w-1/2 lg:gap-[20px] lg:p-[30px]"
          >
            <h1
              className="items-center text-[20px] md:text-[23px] 
            lg:text-[1.5vw] font-extrabold"
            >
              <b> Education </b>
            </h1>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-between items-start gap-[20px] h-1/2"
            >
              <img
                src="./Concordia.png"
                alt="Concordia University"
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
              />
              <div className="flex flex-col w-[70%]">
                <h2
                  className="text-[15px] md:text-[20px]
                lg:text-[1vw]"
                >
                  <b>M.Sc.</b> Building Engineering
                </h2>
                <h3 className="text-[1.4vh] sm:text-[16px] font-light">Concordia University</h3>
                <p className="text-[1.4vh] sm:text-[12px] font-light">GPA 4.1/4.3</p>
              </div>
              <div className="ml-auto text-[10px] sm:text-[15px]">(Jan 2021 - Apr 2023)</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-between items-start gap-[20px] h-1/2"
            >
              <img
                id="IUST"
                src="./IUST.png"
                alt="IUST Icon"
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] bg-white rounded-full"
              />
              <div className="flex flex-col w-[70%]">
                <h2 className="text-[15px] md:text-[20px]
                lg:text-[1vw]">
                  <b>B.Sc.</b> Mechanical Engineering
                </h2>
                <h3 className="text-[1.4vh] sm:text-[16px] font-light">
                  Iran University of Science and Technology
                </h3>
                <p className="text-[1.4vh] sm:text-[12px] font-light">GPA 17.5/20</p>
              </div>
              <div className="ml-auto text-[10px] sm:text-[15px]">(Sep 2016 - Aug 2020)</div>
            </motion.div>
          </div>

          <div
            className="flex flex-col gap-[1vh]
          md:gap-[10px] md:p-[10px] w-full 
          lg:w-1/2 lg:gap-[20px] lg:p-[30px]"
          >
            <h1
              className="items-center text-[20px] md:text-[23px] 
              lg:text-[1.5vw] font-extrabold "
            >
              <b>Experience</b>
            </h1>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-between items-start gap-[20px] h-1/2"
            >
              <img
                src="./Concordia.png"
                alt="Concordia University"
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
              />
              <div className="flex flex-col w-[65%]">
                <h2
                  className="text-[15px] md:text-[20px]
                  lg:text-[1vw]"
                >
                  <b>Machine Learning Researcher</b>
                </h2>
                <h3 className="text-[1.4vh] sm:text-[16px] font-light">Concordia University</h3>
                <p className="text-[1.4vh] sm:text-[12px] font-light md:text-[15px] font-light text-justify">
                  Developed a novel Safe Deep Reinforcement Learning
                  (SDRL)approach for optimal dispatch of energy hubs to minimize
                  operational cost and satisfy operational constraints.
                </p>
              </div>
              <div className="ml-auto text-[10px] sm:text-[15px]">(Jan 2021 - Apr 2023)</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-between items-start gap-[20px] h-1/2"
            >
              <img
                src="./iranbar.webp"
                alt="IranBar icon"
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
              />
              <div className="flex flex-col w-[65%]">
                <h2
                  className="md:text-[20px]
                lg:text-[1vw]"
                >
                  <b>Junior Data Scientist</b>
                </h2>
                <h3 className="text-[1.4vh] sm:text-[16px] font-light">IranBar</h3>
                <p className="text-[1.4vh] sm:text-[12px] font-light md:text-[15px] font-light text-justify text-gray-00">
                  Collaborated with cross-functional teams to train, optimize,
                  and deploy data-driven models for delivery price prediction.
                </p>
              </div>
              <div className="ml-auto text-[10px] sm:text-[15px]">(Jun 2019 - May 2020)</div>
            </motion.div>
          </div>
        </motion.div>
        <SkillsDesktop />
      </div>
    </motion.div>
  );
};

export default About;
