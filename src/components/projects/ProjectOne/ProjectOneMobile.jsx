import { useState, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { TbPoint } from "react-icons/tb";
import axios from "axios";
import { AiOutlineGithub } from "react-icons/ai";
import "./carousel.scss";

function ProjectOneMobile() {
  function base64ToBlob(base64) {
    base64 = base64.replace(/\s/g, "");

    const base64Data = base64.split(",");
    const base64Value = base64Data.length > 1 ? base64Data[1] : base64Data[0];

    const binaryString = window.atob(base64Value);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return new Blob([bytes], { type: "image/gif" });
  }

  const item = {
    id: 1,
    title: "RL Agent Playing PySnake Game",
    img: "https://www.coolmathgames.com/sites/default/files/Snake_OG-logo.jpg",
    result:
      "https://github.com/Alirezad126/PySnake/blob/main/results/score_61.gif?raw=true",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ex vitae sapien bibendum tristique. Suspendisse lacinia, nunc eu iaculis mollis, tellus arcu tristique lectus, non tempus tellus turpis vel enim ",
  };
  const [imageURL, setImageUrl] = useState(null);
  const [imageURLLoading, setimageURLLoading] = useState(false);
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "x") {
      setX(value);
    } else if (name === "y") {
      setY(value);
    }
  };

  const fetchImage = async () => {
    setimageURLLoading(true);
    const requestBody = { x: x, y: y };
    const url =
      "https://09d7oyruyd.execute-api.us-east-1.amazonaws.com/dev/run";
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const response = await axios.post(url, requestBody, {
        headers: headers,
        timeout: 45000,
      });

      const base64Response = response.data.image_base64;

      const imageBlob = base64ToBlob(base64Response);
      const imageObjectUrl = URL.createObjectURL(imageBlob);

      setImageUrl(imageObjectUrl);
    } catch (error) {
      console.log("error fetching the image", error);
    } finally {
      setimageURLLoading(false);
      console.log(imageURL);
    }
  };

  const texts = [
    {
      text: (
        <div className="text-[1.7vh]  w-4/5 m-auto">
          <p className="font-extrabold text-[2.1vh]">Description</p>
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
        <div className="text-[1.7vh]  w-4/5 m-auto">
          <p className="font-extrabold text-[2.1vh]">Game Mechanics</p>
          <p className="font-light text-gray-400">
            {" "}
            <TbPoint className="inline" />{" "}
            <b className="font-bold">Game Environment:</b> The environment
            consists of a fixed-size grid with defined boundaries. Within this
            grid, the snake moves in discrete steps from one cell to another.
          </p>
          <p className="font-light text-gray-400">
            {" "}
            <TbPoint className="inline" />{" "}
            <b className="font-bold">Action Space:</b> The agent can choose from
            four discrete actions corresponding to the directions: up, down,
            left, and right. Each action determines the snake’s movement
            direction.
          </p>
          <p className="font-light text-gray-400">
            {" "}
            <TbPoint className="inline" />{" "}
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
        <div className="text-[1.7vh]  w-4/5 m-auto">
          <p className="font-extrabold text-[2.1vh]">Objectives and Rewards</p>
          <p className="font-light text-gray-400">
            {" "}
            <TbPoint className="inline" />{" "}
            <b className="font-bold">Objective:</b> The primary goal for the
            agent is to increase its score, which it achieves by eating food.
            Each piece of food consumed not only increases the score but also
            extends the snake’s length.
          </p>
          <p className="font-light text-gray-400">
            {" "}
            <TbPoint className="inline" /> <b className="font-bold">Rewards:</b>{" "}
            The training process involves a reward system where positive rewards
            are given for eating food and negative rewards are assigned for
            crashing into the walls or the snake itself. The agent learns to
            navigate by maximizing its cumulative reward.
          </p>
        </div>
      ),
    },
    {
      text: (
        <div className="flex m-auto  duration-400">
          <div className="flex flex-col gap-3  p-[10px] justify-center items-center">
            {imageURL !== null || (
              <div className="text-center w-full flex flex-col gap-2">
                <h1 className="text-white font-bold text-[3vh]">
                  Try it Online
                </h1>
                <p className="text-[1.6vh] text-start">
                  Enter X and Y axis cell numbers for processing. The model, on
                  AWS Lambda's serverless platform, will play the game and
                  display the GIF response (Coool right ?!). <br />{" "}
                  <p className="font-bold">
                    {" "}
                    Note: Exceeding about 20 cells may lead to prolonged
                    processing, risking API timeout.(AWL Lambda is serverless
                    and the code execution might take a bit longer)
                  </p>
                </p>
                <form className="flex flex-1 flex-col gap-[2vh] items-center">
                  <input
                    className="p-[5px] w-3/4 h-[25px] text-center lg:p-[10px] bg-transparent border-white border-[1px] rounded-2xl text-[13px] text-white"
                    type="number"
                    min={5}
                    max={40}
                    required
                    placeholder="Enter the X-Axis number of cells"
                    value={x}
                    onChange={handleInputChange}
                    name="x"
                  />
                  <input
                    className="p-[5px] w-3/4  text-center lg:p-[10px] bg-transparent border-white border-[1px] rounded-2xl text-[13px] text-white"
                    type="number"
                    min={5}
                    max={40}
                    required
                    placeholder="Enter the Y-Axis number of cells"
                    value={y}
                    onChange={handleInputChange}
                    name="y"
                  />
                  {imageURLLoading || (
                    <button
                      onClick={fetchImage}
                      className="text-sm text-white p-[8px] lg:p-[20px] border-none bg-orange-500 hover:bg-orange-400 cursor-pointer font-semibold shadow rounded-md transition ease-in-out duration-150"
                    >
                      Send Request
                    </button>
                  )}
                  {imageURLLoading && (
                    <button
                      type="button"
                      class="inline-flex justify-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-orange-500 hover:bg-orange-400 transition ease-in-out duration-150 cursor-not-allowed"
                      disabled=""
                    >
                      <svg
                        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </button>
                  )}
                </form>
              </div>
            )}
            {imageURL && (
              <div className="flex flex-col flex-1 max-w-[300px] items-center gap-10 ">
                <img
                  className="w-[120%] rounded-xl object-fit "
                  src={imageURL}
                  alt=""
                />

                <button
                  onClick={() => {
                    setImageUrl(null);
                  }}
                  className="text-xl text-white p-[2vh] lg:p-[20px] border-none bg-indigo-500 hover:bg-indigo-400 cursor-pointer font-semibold shadow rounded-md transition ease-in-out duration-150"
                >
                  Try again?
                </button>
              </div>
            )}
          </div>
        </div>
      ),
    },
  ];

  const Slides = texts.map((slide) => {
    return <div className="text-[1vw]">{slide.text}</div>;
  });

  return (
    <section className="relative">
      <div className="flex flex-col justify-center text-center items-center m-auto w-4/5  pt-[100px]">
        <img
          className="h-full w-3/5 md:w-1/2 m-auto rounded-xl object-fit "
          src={item.img}
          alt=""
        />

        <div className="border mt-3 p-2 rounded-full border-orange-400">
          <h1 className="flex justify-center font-bold text-[2vh]">
            {item.title}{" "}
            <a
              href="https://github.com/Alirezad126/PySnake"
              target="_blank"
              className=""
            >
              <AiOutlineGithub className="w-7 h-7 sm:w-15 sm:h-15 " />
            </a>{" "}
          </h1>
        </div>
      </div>
      <div className="w-4/5 m-auto mt-3 py-5  relative border border-gray-500 rounded-3xl ">
      <div className="carousel" ref={carouselRef}>
        {Slides}
      </div>

        {/* Left Arrow */}
        <div
          onClick={scrollToPrevious}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-20px] text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer"
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
          onClick={scrollToNext}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-20px] text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer"
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
