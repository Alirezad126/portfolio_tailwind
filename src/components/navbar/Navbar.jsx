import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="h-24">
      <Sidebar />
      <div className="justify-end p-5 sm:w-4/5 max-w-[1366px] sm:m-auto flex sm:items-center sm:justify-between sm:h-full">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" hidden sm:block text-4xl font-normal font-customFont"
        >
          HypeR-Dev
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex gap-7"
        >
          <motion.a
            href="https://www.linkedin.com/in/alireza-daneshvar-910ba4194/"
            target="_blank"
            whileHover={{ scale: 1.9 }}
          >
            <AiFillLinkedin
              className="w-10 h-10 sm:w-15 sm:h-15 "
              fill="#0075B5"
            />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/alireza._.dns?igsh=cDFqYzJqOGVhMng3"
            target="_blank"
            whileHover={{ scale: 1.9 }}
          >
            <AiOutlineInstagram
              className="w-10 h-10 sm:w-15 sm:h-15 "
              fill="#d62976"
            />
          </motion.a>
          <motion.a
            href="https://github.com/Alirezad126"
            target="_blank"
            whileHover={{ scale: 1.9 }}
          >
            <AiOutlineGithub className="w-10 h-10 sm:w-15 sm:h-15 " />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
