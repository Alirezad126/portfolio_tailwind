import { useState, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { TbPoint } from "react-icons/tb";
import "./carousel.scss";
function Carousel() {
  const carouselRef = useRef(null);

  const scrollToNext = () => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth / texts.length;
      carouselRef.current.scrollBy({ left: scrollWidth, behavior: "smooth" });
    }
  };

  const scrollToPrevious = () => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth / texts.length;
      carouselRef.current.scrollBy({ left: -scrollWidth, behavior: "smooth" });
    }
  };

  const texts = [
    {
      text: (
        <div>
          <p className="font-extrabold text-3xl">Description</p>
          <p className="font-light text-gray-400">
            This project integrates a Pygame-based interface with a
            reinforcement learning (RL) environment. It allows both machine
            learning agents and human players to interact with the PySnake game.
            The project demonstrates the use of a Deep Q-Network (DQN) agent to
            autonomously play and learn from the game environment. The objective
            is to train an AI agent to navigate the game by controlling a snake,
            maximizing its score by consuming food items while avoiding
            collisions with itself and the game boundaries.
          </p>
        </div>
      ),
    },

    {
      text: (
        <div>
          <p className="font-extrabold text-3xl">Game Mechanics</p>
          <p className="font-light text-gray-400">
            <TbPoint className="inline" />
            <b className="font-bold">Game Environment:</b> The environment
            consists of a fixed-size grid with defined boundaries. Within this
            grid, the snake moves in discrete steps from one cell to another.
          </p>
          <p className="font-light text-gray-400">
            <TbPoint className="inline" />
            <b className="font-bold">Action Space:</b> The agent can choose from
            four discrete actions corresponding to the directions: up, down,
            left, and right. Each action determines the snake’s movement
            direction.
          </p>
          <p className="font-light text-gray-400">
            <TbPoint className="inline" />
            <b className="font-bold">State Representation:</b> The game’s state
            includes the position of the snake’s head, the location of the food
            item, and the presence of immediate threats (like approaching walls
            or the snake's body). This helps the agent understand its current
            situation to make informed decisions.
          </p>
        </div>
      ),
    },
    {
      text: (
        <div>
          <p className="font-extrabold text-3xl">Objectives and Rewards</p>
          <p className="font-light text-gray-400 ">
            <TbPoint className="inline" />
            <b className="font-bold">Objective:</b> The primary goal for the
            agent is to increase its score, which it achieves by eating food.
            Each piece of food consumed not only increases the score but also
            extends the snake’s length.
          </p>
          <p className="font-light text-gray-400">
            <TbPoint className="inline" /> <b className="font-bold">Rewards:</b>
            The training process involves a reward system where positive rewards
            are given for eating food and negative rewards are assigned for
            crashing into the walls or the snake itself. The agent learns to
            navigate by maximizing its cumulative reward.
          </p>
        </div>
      ),
    },
  ];

  const Slides = texts.map((slide) => {
    return <div className="text-[1vw]">{slide.text}</div>;
  });

  return (
    <div className="w-full h-full m-auto py-5 px-5 relative border border-gray-500 rounded-3xl">
      <div
        onClick={scrollToPrevious}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-50px] text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer"
      >
        <BsChevronCompactLeft size={30} />
      </div>
      <div className="carousel" ref={carouselRef}>
        {Slides}
      </div>

      <div
        onClick={scrollToNext}
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-50px] text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer"
      >
        <BsChevronCompactRight size={30} />
      </div>
    </div>
  );
}

export default Carousel;
