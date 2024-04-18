import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { TbPoint } from "react-icons/tb";

function ProjectOneMobile() {
  const item = {
    id: 1,
    title: "Reinforcement Learning Agent Playing PySnake Game",
    img: "https://www.coolmathgames.com/sites/default/files/Snake_OG-logo.jpg",
    result:
      "https://github.com/Alirezad126/PySnake/blob/main/results/score_61.gif?raw=true",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ex vitae sapien bibendum tristique. Suspendisse lacinia, nunc eu iaculis mollis, tellus arcu tristique lectus, non tempus tellus turpis vel enim ",
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const handleResults = () => {
    if (showResults === false){
      setShowResults(true)
    }
  };
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
      <p className="font-light text-gray-400 "> <TbPoint className="inline"/> Command:<br/> <code className="text-[1.3vh] ml-6">git clone https://github.com/Alirezad126/PySnake.git</code></p>
      <p className="font-light text-gray-400"> <TbPoint className="inline"/> Clone the project to your local machine to get started with the setup.</p>
      <p className="font-medium">2. Install Dependencies</p>
      <p className="font-light text-gray-400"> <TbPoint className="inline"/> Ensure Python 3 is installed on your machine.</p>
      <p className="font-light text-gray-400 "> <TbPoint className="inline"/> Command: <br/> <code className="text-[1.3vh] ml-6">pip install -r requirements.txt</code></p>


      </div>,
    },
    {
      divs: (
        <div className="flex flex-col gap-3 p-[10px] justify-center items-center">
          {showResults && (
            <div className="w-2/3">
              <img
                className=" rounded-xl object-fit "
                src={item.result}
                alt=""
              />
            </div>
          )}

          <div className="h-1/6 pt-1 text-center">
            <button
              onClick={handleResults}
              className="p-[10px] font-semibold text-base cursor-pointer border-2 rounded-full  bg-transparent z-50"
            >
              Click Me!
            </button>
          </div>

          <div className="text-center">
            <h1 className="text-white font-bold text-[2vh]">Live Deployment</h1>
          </div>
        </div>
      ),
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section>
      <div className="flex flex-col justify-center text-center m-auto w-4/5 h-3/7 pt-[150px]">
        <img
          className="h-full w-3/5 md:w-1/2 m-auto rounded-xl object-fit "
          src={item.img}
          alt=""
        />
        <h1 className="font-bold text-[2.2vh]">{item.title}</h1>
      </div>
      <div className="w-4/5 h-1/2 m-auto py-5 px-5 relative overflow-hidden">
        <div className="text-[1.7vh]  w-4/5 m-auto">
          {slides[currentIndex].text}
        </div>
        <div className="flex m-auto w-4/5 h-full duration-400 items-center justify-center ">
          {slides[currentIndex].divs}
        </div>
        {/* Left Arrow */}
        <div
          onClick={prevSlide}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[0px] text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer"
        >
          <div className="hidden md:block z-50">
          <BsChevronCompactLeft size={30} />
          </div>

          <div className="sm:hidden z-50">
          <BsChevronCompactLeft size={20} />
          </div>
        </div>
        {/* Rigth Arrow */}
        <div
          onClick={nextSlide}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[0px] text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer"
        >
          <div className="hidden md:block z-50">
          <BsChevronCompactRight size={30} />
          </div>

          <div className="sm:hidden z-50">
          <BsChevronCompactRight size={20} />
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default ProjectOneMobile;
