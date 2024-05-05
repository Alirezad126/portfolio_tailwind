import { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "react-chatbot-kit/build/main.css";
import "./index.css";
import { IoIosCloseCircle } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";

function ChatBot() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      {!open && (
        <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-20 z-50">
          <div class="relative inline-flex  group">
            <button
              onClick={handleClick}
              class="relative inline-flex items-center justify-center px-4 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-full border-[1px] border-da border-gray-300"
              role="button"
            >
              <div className="flex items-center justify-center">
                <IoChatbubblesOutline className="hidden sm:block" size={45} />
                <IoChatbubblesOutline className="sm:hidden" size={40} />
                <p className="hidden sm:block sm:p-3 sm:text-xl">Chat with me</p>
              </div>
            </button>
          </div>
        </div>
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
            headerText="Conversation with Alireza"
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
