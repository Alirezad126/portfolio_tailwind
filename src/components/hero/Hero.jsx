import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import "./hero.scss";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },

  heroImageInitial: {
    opacity: 0,
    x: 2000,
  },

  heroImageAnimate: {
    x: 0,
    transition: {
      duration: 1,
    },
    opacity: 1,
  },

  heroImageInview: {
    y: [0, 20, -20, 0],
    
    transition: {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },

  buttonInView: {
    y: [0, 5, -5, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },

  animate: {
    x: "-220%",

    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

const Hero = () => {
  return (
    <div style={{ height: 'calc(100vh - 100px)' }} className="overflow-hidden md:relative bg-gradient-to-b">
      <div className="h-[100%] mt-3 ml-[10%] mr-[10%]  
      sm:h-[80%]
      lg:max-w-[50%] lg:mt-[unset] ">
        <motion.div
          className="h-[60%] w-full text-center flex flex-col justify-center gap-[20px]
           
        lg:text-left items-[unset] lg:w-4/5 lg:h-full "
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} style={{textShadow:"3px 3px 3px gray", letterSpacing:"10px" }} className="text-[3vh] font-bold sm:text-[4vh] lg:text-[5vh]">Alireza Daneshvar</motion.h2>
          <motion.h1 variants={textVariants} className="text-[3vh] h-[3em] overflow-ellipsis font-bold sm:text-[5vh] lg:text-[6vh]" >
            <div>
              <ReactTyped
                strings={[
                  "I'm a Data Scientist",
                  "I'm a Machine Learning Engineer!",
                  "I love making ML web apps!",
                  "I'm also a casual singer !!",
                  "and a Gamer !!!",
                ]}
                typeSpeed={60}
                backSpeed={20}
                loop
              />
            </div>
          </motion.h1>
          <motion.div variants={textVariants} className="flex flex-col gap-5 
          sm:flex-row sm:items-center sm:justify-center
          lg:justify-normal">
            <a href="#Projects">
              <motion.button className="p-[10px] font-normal mr-0 text-sm cursor-pointer border-2 rounded-full  bg-transparent 
          sm:p-[20px] sm:text-xl z-50" variants={textVariants}>
                Try My Projects LIVE!
              </motion.button>
            </a>

            <a
              className="CVButton"
              href="https://drive.google.com/file/d/1Cl0-hcOaX8NxvMPlHXzCNyVqZKiipbUI/view?usp=sharing"
            >
              <motion.button className="p-[10px] font-normal mr-0 text-sm cursor-pointer border-2 rounded-full  bg-transparent 
          sm:p-[20px] sm:text-xl z-50" 
              variants={textVariants}>
                Download My CV
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button className="p-[10px] font-normal mr-0 text-sm cursor-pointer border-2 rounded-full  bg-transparent 
          sm:p-[20px] sm:text-xl z-50" 
               variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            src="scroll.png"
            alt=""
            animate="scrollButton"
            className="w-[30px] m-auto sm:w-[50px] sm:m-0"
          />
        </motion.div>
      </div>

      <div className="bottom-0 right-0 top-[unset] absolute w-full h-1/4 
        sm:w-1/2 sm:left-[30%] sm:bottom-[10%] 
        md:w-1/2 
        lg:w-1/3 lg:top-40 lg:right-20 lg:left-[unset] z-10 ">
        <motion.img
          variants={textVariants}
          initial="heroImageInitial"
          animate="heroImageAnimate"
          whileInView="heroImageInview"
          src="/header-img.svg"
          alt=""
          className="w-full h-full sm:w-[unset] sm:h-[unset]"
        />
      </div>

      <motion.div
        className="hidden md:block sm:absolute sm:bottom-[-120px] sm:text-[50vh] sm:whitespace-nowrap sm:text-[#ffffff09] sm:w-1/2 sm:font-bold sm:pointer-events-none"  
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Programmer Singer Engineer
      </motion.div>

      

      
      
    </div>
  );
};

export default Hero;
