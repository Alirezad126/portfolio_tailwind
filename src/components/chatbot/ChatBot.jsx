import { Chatbot } from "react-chatbot-kit";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "react-chatbot-kit/build/main.css";
import "./index.css";
import { IoIosCloseCircle } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setShow(true), 3000);
    const hideTimer = setTimeout(() => setShow(false), 10000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      {!open && (
        <motion.div
          className="fixed bottom-4 right-4 sm:bottom-5 sm:right-20 z-50"
          initial={{ opacity: 0, x: 100, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
        >
          <AnimatePresence>
            {show && (
              <motion.div
                initial={{ opacity: 0, x: 100, y: 100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 100, y: 100 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-[50px] right-[50px] sm:right-[130px] w-[300px] bubble right  bg-gradient-to-br from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 hover:text-white cursor-pointer shadow rounded-full transition ease-in-out duration-150 flex flex-col items-end z-[1000]"
              >
                <div className="mb-2 text-xl text-black font-bold text-just">
                  Hello! I'm Alireza's Chatbot, powered by RAG-GPT, here to dive into all
                  things about my thesis, work experiences, and more. What would
                  you like to know today?
                </div>
                <button
                  className="bg-transparent text-black font-extrabold px-4 py-1 rounded border-[2px] border-black"
                  onClick={() => setShow(false)}
                >
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <div class="relative inline-flex  group">
            <button
              onClick={handleClick}
              class="relative inline-flex items-center justify-center px-4 py-4 text-lg font-bold text-black bg-gradient-to-br from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 hover:text-white cursor-pointer shadow rounded-full transition ease-in-out duration-150"
              role="button"
            >
              <div className="flex items-center justify-center">
                <IoChatbubblesOutline className="hidden sm:block" size={45} />
                <IoChatbubblesOutline className="sm:hidden" size={40} />
                <p className="hidden sm:block sm:p-3 sm:text-xl">Chatbot</p>
              </div>
            </button>
          </div>
        </motion.div>
      )}

      <div
        style={{
          display: open ? "block" : "none",
        }}
        className="fixed bottom-0 right-0 md:fixed md:bottom-[10px] md:right-[30px] z-[1000] "
      >
        <button
          onClick={handleClick}
          className="absolute top-3 right-5 z-[1000] w-[30px] h-[30px] rounded-full flex justify-center items-center p-0"
        >
          <IoIosCloseCircle size={30} fill="white" />
        </button>

        <div>
          <Chatbot
            config={config}
            headerText="Conversation"
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
