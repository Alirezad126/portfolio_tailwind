import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import BotAvatar from "./components/botAvatar/BotAvatar";

const config = {
  initialMessages: [createChatBotMessage(`Hello! I'm Alireza's virtual twin, here to dive into all things about my thesis, work experiences, and more. What would you like to know today?`)],
  botName:'AliBot',
  customComponents: {
    botAvatar: (props) => (<BotAvatar {...props} />),
  }
}

export default config