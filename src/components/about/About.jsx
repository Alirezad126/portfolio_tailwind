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
    <motion.div className="bg-scroll bg-gradient-to-b h-full flex max-w-[1600px] m-auto flex-col items-center">
      <div
        className="flex flex-col lg:max-w-[1200px] 2xl:max-w-[80%] justify-center w-full
        
      sm:gap-[30px]
      md:gap-[1vh]
      lg:gap-[1vh]"
      >
        <motion.div
          // variants={variants}
          // initial="initial"
          // whileInView="animate"
          className="top-0 left-0   font-extrabold text-center"
        >
          <h1
            className="text-orange-400 
            text-[2rem]
            pt-5
            pb-10
            sm:pb-0
            md:pb-5
          sm:text-[2rem]
          lg:text-[2.5rem]
          2xl:text-[4rem] "
          >
            About Me
          </h1>

        </motion.div>

        <div className="p-3">
          <p className="text-[1.8vh] md:text-[1rem] 2xl:text-[1.2rem] text-justify">
            Hi there! 👋 <br /> I’m Alireza. I recently completed my Master’s in
            Building Engineering at Concordia University and hold a Bachelor's
            degree in Mechanical Engineering from Iran University of Science and
            Technology. I’m passionate about using artificial intelligence to
            enhance our daily spaces 🚀. <br /> Previously, I held the position
            of Machine Learning Researcher at Concordia University and served as
            a Junior Data Scientist at IranBarNet. In the latter role, I
            enhanced logistics efficiency by optimizing shipping and driving
            routes 📊 <br/> I love simplifying complex challenges into effective
            solutions and I'll occasionally share insights from my live projects
            right here—so stay tuned! If you’re interested in making a
            difference with technology, let’s connect! 🌟
          </p>
        </div>

        <motion.div
          // variants={variants}
          // initial="initial"
          // whileInView="animate"
          className="flex flex-col
          gap-[1vh]
          lg:flex-row lg:justify-around lg:gap-[10px] lg:m-0 z-10 rounded-2xl lg:border-[1px] lg:h-1/2 "
        >
          <div
            className="flex flex-col p-2
            gap-[2vh]
          md:gap-[10px] md:p-[10px] w-full 
          lg:w-1/2 lg:gap-[20px] lg:p-[30px]"
          >
            <h1
              className="items-center text-[2.3vh]  
            lg:text-[1.5rem] 2xl:text-[2rem] font-extrabold"
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
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] 2xl:w-[70px] 2xl:h-[70px]"
              />
              <div className="flex flex-col w-[70%]">
                <h2 className="text-[1.8vh] md:text-[0.9rem] lg:text-[1rem] 2xl:text-[1.5rem]">
                  <b>M.Sc.</b> Building Engineering
                </h2>
                <h3 className="text-[1.8vh] md:text-[0.9rem] lg:text-[1rem] 2xl:text-[1.5rem]">
                  Concordia University
                </h3>
                <p className="text-[1.3vh] sm:text-[12px] 2xl:text-[15px]  font-light">
                  GPA 4.1/4.3
                </p>
              </div>
              <div className="ml-auto text-[0.7rem] 2xl:text-[1rem]">
                (Jan 2021 - Apr 2023)
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-between items-start gap-[20px] h-1/2"
            >
              <img
                id="IUST"
                src="./IUST.png"
                alt="IUST Icon"
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] 2xl:w-[70px] 2xl:h-[70px] bg-white rounded-full"
              />
              <div className="flex flex-col w-[70%]">
                <h2 className="text-[1.8vh] md:text-[0.9rem] lg:text-[1rem] 2xl:text-[1.5rem]">
                  <b>B.Sc.</b> Mechanical Engineering
                </h2>
                <h3 className="text-[1.8vh] md:text-[0.9rem] lg:text-[1rem] 2xl:text-[1.5rem]">
                  Iran University of Science and Technology
                </h3>
                <p className="text-[1.2vh] sm:text-[12px] 2xl:text-[15px] font-light">
                  GPA 17.5/20
                </p>
              </div>
              <div className="ml-auto text-[0.7rem] 2xl:text-[1rem]">
                (Sep 2016 - Aug 2020)
              </div>
            </motion.div>
          </div>

          <div
            className="flex flex-col p-2
            gap-[2vh]
          md:gap-[10px] md:p-[10px] w-full 
          lg:w-1/2 lg:gap-[20px] lg:p-[30px]"
          >
            <h1
              className="items-center text-[2.3vh]
              lg:text-[1.5rem] 2xl:text-[2rem] font-extrabold "
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
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] 2xl:w-[70px] 2xl:h-[70px]"
              />
              <div className="flex flex-col w-[65%]">
                <h2 className="text-[1.8vh] md:text-[0.9rem] lg:text-[1rem] 2xl:text-[1.5rem]">
                  <b>Machine Learning Researcher</b>
                </h2>
                <h3 className="text-[1.8vh] md:text-[0.9rem] lg:text-[1rem] 2xl:text-[1.5rem]">
                  Concordia University
                </h3>
                <p className="text-[1.8vh] md:text-[0.8rem] 2xl:text-[1.2rem] font-light text-justify text-gray-00">
                  Developed a novel Safe Deep Reinforcement Learning
                  (SDRL)approach for optimal dispatch of energy hubs to minimize
                  operational cost and satisfy operational constraints.
                </p>
              </div>
              <div className="ml-auto text-[0.7rem] 2xl:text-[1rem]">
                (Jan 2021 - Apr 2023)
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-between items-start gap-[20px] h-1/2"
            >
              <img
                src="./iranbar.webp"
                alt="IranBar icon"
                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] 2xl:w-[70px] 2xl:h-[70px]"
              />
              <div className="flex flex-col w-[65%]">
                <h2 className="text-[1.8vh] md:text-[0.9rem] lg:text-[1rem] 2xl:text-[1.5rem]">
                  <b>Junior Data Scientist</b>
                </h2>
                <h3 className="text-[1.8vh] md:text-[0.9rem] lg:text-[1rem] 2xl:text-[1.5rem]">
                  IranBar
                </h3>
                <p className="text-[1.8vh] md:text-[0.8rem] 2xl:text-[1.2rem] font-light text-justify text-gray-00">
                  Collaborated with cross-functional teams to train, optimize,
                  and deploy data-driven models for delivery price prediction.
                </p>
              </div>
              <div className="ml-auto text-[0.7rem] 2xl:text-[1rem]">
                (Jun 2019 - May 2020)
              </div>
            </motion.div>
          </div>
        </motion.div>
        <SkillsDesktop />
      </div>
    </motion.div>
  );
};

export default About;
