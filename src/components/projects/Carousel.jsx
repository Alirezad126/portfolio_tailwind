import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { TbPoint } from "react-icons/tb";
function Carousel() {
  const slides = [
    {
      text: <div>
        <p className="font-bold">Description</p>
        <p className="font-light text-gray-400">This project integrates a Pygame-based interface with a reinforcement learning (RL) environment. It allows both machine learning agents and human players to interact with the PySnake game. The project demonstrates the use of a Deep Q-Network (DQN) agent to autonomously play and learn from the game environment.</p>
      </div>
    },

    {
      text: <div>
      <p className="font-bold">Repository Structure</p>
      <p className="font-light text-gray-400"> <TbPoint className="inline"/> envs: This directory includes the RL environment for the PySnake game, providing an interface for training and evaluating RL agents.</p>
      <p className="font-light text-gray-400"> <TbPoint className="inline"/> agent: Contains the implementation of the DQN agent, along with evaluation scripts to measure performance and generate visual feedback in the form of a GIF.</p>
      <p className="font-light text-gray-400"> <TbPoint className="inline"/> pygame: Hosts the graphical game interface for human players, enabling them to play PySnake using a Pygame-based setup.</p>
      </div>,
    },
    {
      text: <div>
      <p className="font-bold">Project Setup</p>
      <p className="font-medium">1. Clone the Repository</p>
      <p className="font-light text-gray-400 "> <TbPoint className="inline"/> Command: <code className="text-[0.7vw] ml-6">git clone https://github.com/Alirezad126/PySnake.git</code></p>
      <p className="font-light text-gray-400"> <TbPoint className="inline"/> Clone the project to your local machine to get started with the setup.</p>
      <p className="font-medium">2. Install Dependencies</p>
      <p className="font-light text-gray-400"> <TbPoint className="inline"/> Ensure Python 3 is installed on your machine.</p>
      <p className="font-light text-gray-400 "> <TbPoint className="inline"/> Command: <code className="text-[0.7vw] ml-6">pip install -r requirements.txt</code></p>


      </div>,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === (slides.length - 1);
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full h-full m-auto py-5 px-5 relative overflow-hidden">
      <div className="flex m-auto w-4/5 h-full duration-400 ">
        <p className="text-[1vw]">{slides[currentIndex].text}</p>
      </div>
      {/* Left Arrow */}
      <div onClick={prevSlide} className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer">
         
        <BsChevronCompactLeft size={30} />
        
      </div>
      {/* Rigth Arrow */}
      <div onClick={nextSlide} className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
}

export default Carousel;
