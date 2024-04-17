import { motion } from "framer-motion";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiGnubash } from "react-icons/si";
import { SiOpenaigym } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiAmazonaws } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiMlflow } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import SkillBar from "./SkillBar";



const Skills = ({variants}) => {
    return (
      
      <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="flex flex-col justify-between mt-[10px] m-auto gap-[1.5vh] bg-gradient-to-a"
    >
      <motion.div
          // variants={variants}
          // initial="initial"
          // whileInView="animate"
          className="top-0 left-0 sm:pt-[30px] sm:pb-[30px] pt-[20px] pb-[20px]  font-extrabold text-center"
        >
          <h1
            className="text-orange-400 
            text-[40px]"
          >
            My Skills
          </h1>
        </motion.div>
        
      <motion.div
        initial="initial"
        whileInView="animate"
        whileHover={{ background: "lightgray", color: "black" }}
        className="flex flex-col items-center gap-[10px] border-[0.5px] rounded-xl w-5/6 h-1/4 m-auto p-[8px]"
      >
        <div className="text-center text-[2.4vh] font-bold" >
          <h2>Programming Languages</h2>
        </div>
        <div className="flex flex-row gap-[4vw] justify-center flex-wrap w-full">
          <SkillBar image={<FaPython className="w-[9vw] h-[9vw] "/>} name={"Python"} />
          <SkillBar image={<TbBrandCpp className="w-[9vw] h-[9vw] "/>} name={"C++"} />
          <SkillBar
            image={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
                className="w-[9vw] h-[9vw] "
              >
                <path
                  fill="currentColor"
                  d="M495.855 367.604c-28.98-73.177-53.037-148.231-80.725-221.893c-12.23-31.362-24.198-62.986-40.868-92.33c-6.62-10.535-12.956-22.119-23.814-28.86c-2.739-1.74-5.828-2.479-8.88-2.42c-5.084.096-10.14 2.37-14.025 5.65c-14.571 11.543-23.209 28.334-32.896 43.793c-17.114 28.698-35.156 58.748-63.773 77.396c-13.44 9.485-31.039 10.514-43.995 20.686c-17.72 13.36-29.767 32.31-44.298 48.737c-3.31 3.956-8.436 5.53-12.916 7.67C86.315 243.71 42.945 261.35 0 279.916c36.367 28.132 75.115 53.157 112.208 80.321c10.172-2.018 20.383-6.196 30.877-4.339c16.63 5.207 26.377 21.15 34.006 35.721c15.5 31.765 26.7 65.307 39.253 98.283c20.988-1.493 39.878-12.31 56.104-25.025c31.24-25.307 55.034-58.001 81.23-88.192c12.552-13.199 25.347-28.92 44.197-32.593c19.05-4.601 39.454 2.22 53.581 15.338c19.818 17.719 37.376 38.203 60.544 51.765c-3.108-15.338-10.575-29.101-16.145-43.592M171.844 316.04c-18.284 10.817-37.699 19.717-56.71 29.162c-29.828-19.98-58.889-41.15-88.192-61.856c39.515-17.315 79.635-33.4 119.675-49.545c18.97 14.813 38.547 28.88 57.517 43.693c-8.92 14.248-19.657 27.487-32.29 38.546m40.665-49.646c-18.85-14.167-37.94-27.951-56.508-42.482c11.907-16.226 24.945-31.906 40.565-44.701c10.333-6.62 22.966-8.456 33.703-14.43c25.469-12.714 42.845-36.044 59.434-58.324c-21.271 55.216-43.975 110.654-77.194 159.937"
                />
              </svg>
            }
            name={"MATLAB"}
          />
          <SkillBar image={<SiGnubash className="w-[9vw] h-[9vw] "/>} name={"Bash"} />
        </div>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        whileHover={{ background: "lightgray", color: "black" }}
        className="flex flex-col items-center gap-[10px] border-[0.5px] rounded-xl w-5/6 h-1/4 m-auto p-[8px] "
      >
        <div className="text-center text-[2.4vh] font-bold">
          <h2>Machine Learning</h2>
        </div>
        <div className="flex flex-row gap-[4vw] justify-center flex-wrap w-full">
          <SkillBar image={<SiPytorch className="w-[9vw] h-[9vw] "/>} name={"PyTorch"} />
          <SkillBar image={<SiTensorflow className="w-[9vw] h-[9vw] "/>} name={"Tensorflow"} />
          <SkillBar image={<SiScikitlearn className="w-[9vw] h-[9vw] "/>} name={"Scikit"} />
          <SkillBar image={<SiOpencv className="w-[9vw] h-[9vw] "/>} name={"OpenCV"} />
          <SkillBar image={<SiOpenaigym className="w-[9vw] h-[9vw] "/>} name={"Gym"} />
        </div>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        whileHover={{ background: "lightgray", color: "black" }}
        className="flex flex-col items-center gap-[10px] border-[0.5px] rounded-xl w-5/6 h-1/4 m-auto p-[8px] "
      >
        <div className="text-center text-[2.4vh] font-bold">
          <h2>MLOps</h2>
        </div>

        <div className="flex flex-row gap-[4vw] justify-center flex-wrap w-full">
          <SkillBar image={<SiFlask className="w-[9vw] h-[9vw] "/>} name={"Flask"} />
          <SkillBar image={<SiFastapi className="w-[9vw] h-[9vw] "/>} name={"FastAPI"} />
          <SkillBar image={<SiAmazonaws className="w-[9vw] h-[9vw] "/>} name={"AWS"} />
          <SkillBar image={<SiDocker className="w-[9vw] h-[9vw] "/>} name={"Docker"} />
          <SkillBar image={<SiMlflow className="w-[9vw] h-[9vw] "/>} name={"MLFlow"} />
        </div>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        whileHover={{ background: "lightgray", color: "black" }}
        className="flex flex-col items-center gap-[10px] border-[0.5px] rounded-xl w-5/6 h-1/4 m-auto p-[8px] "
      >
        <div className="text-center text-[2.4vh] font-bold">
          <h2>Web Development</h2>
        </div>
        <div className="flex flex-row gap-[4vw] justify-center flex-wrap w-full ">
          <SkillBar image={<RiReactjsFill className="w-[9vw] h-[9vw] "/>} name={"React"} />
          <SkillBar image={<SiJavascript className="w-[9vw] h-[9vw] "/>} name={"JavaScript"} />
          <SkillBar image={<FaHtml5 className="w-[9vw] h-[9vw] "/>} name={"HTML"} />
          <SkillBar image={<FaSass className="w-[9vw] h-[9vw] "/>} name={"Sass"} />
          <SkillBar image={<FaBootstrap className="w-[9vw] h-[9vw] "/>} name={"Bootstrap"} />
          <SkillBar image={<SiPostgresql className="w-[9vw] h-[9vw]"/>} name={"PostgreSQL"} />
        </div>
      </motion.div>
    </motion.div>
    );
    
}

export default Skills