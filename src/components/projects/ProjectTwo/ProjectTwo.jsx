import Carousel from "./Carousel";
import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";

const item = {
  id: 1,
  title: "AI Chatbot with Retrieval-Augmented Generation ",
  img: "./chatbot_title.jpg",
};

const ProjectTwo = () => {
  return (
    <section >
      <div className="flex justify-center m-auto max-w-[1500px] h-full xl:pt-[100px]">
        <div className="w-full h-full m-auto flex  justify-center">
          <div className="flex flex-col h-full w-full justify-center">
            <div className="flex flex-row gap-10 items-center justify-center">
              <div className="w-1/3 flex justify-center pt-4">
                <img
                  className="h-full rounded-xl object-fit "
                  src={item.img}
                  alt=""
                />
              </div>
              <div class="relative  inline-flex items-center justify-center p-1 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-yellow-500 to-orange-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                  <h1 className="flex items-center justify-center text-white font-bold text-[1.3vw]">
                    {item.title}
                    <motion.a
                      href="https://github.com/Alirezad126/RAGBot"
                      target="_blank"
                      whileHover={{ scale: 1.9 }}
                      className=""
                    >
                      <AiOutlineGithub className="w-10 h-10 sm:w-15 sm:h-15 " />
                    </motion.a>
                  </h1>
                </span>
              </div>
            </div>

            <div className="flex m-auto mt-10 max-w-[1200px]">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTwo;
