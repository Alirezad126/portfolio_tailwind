import Carousel from "./Carousel";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";

const item = {
  id: 1,
  title: "Reinforcement Learning Agent Playing PySnake Game ",
  img: "https://www.coolmathgames.com/sites/default/files/Snake_OG-logo.jpg",
  result:
    "https://github.com/Alirezad126/PySnake/blob/main/results/score_61.gif?raw=true",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ex vitae sapien bibendum tristique. Suspendisse lacinia, nunc eu iaculis mollis, tellus arcu tristique lectus, non tempus tellus turpis vel enim ",
};

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

const ProjectOne = () => {
  const [imageURL, setImageUrl] = useState(null);
  const [imageURLLoading, setimageURLLoading] = useState(false);
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);

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
    }
  };

  return (
    <section>
      <div className="flex justify-center items-end w-full h-full xl:pt-[150px]">
        <div className="w-4/5 h-full m-auto flex gap-[2vw] items-start">
          <div className="flex flex-col gap-3 h-4/5 w-2/3 justify-center items-center">
            <div className="w-full h-1/3 flex justify-center">
              <img
                className="h-full w-3/5 rounded-xl object-fit "
                src={item.img}
                alt=""
              />
            </div>
            <div className="text-center w-3/5">
              <h1 className="flex text-white font-bold text-[1.6vw]">
                {item.title}
                <motion.a
                  href="https://github.com/Alirezad126/PySnake"
                  target="_blank"
                  whileHover={{ scale: 1.9 }}
                  className=""
                >
                  <AiOutlineGithub className="w-10 h-10 sm:w-15 sm:h-15 " />
                </motion.a>
              </h1>
            </div>
            <div className="w-full h-1/2 flex ">
              <Carousel />
            </div>
          </div>

          <div className="flex flex-col gap-3 h-3/4 w-1/3 p-[30px] justify-center items-center">
            {imageURL !== null || (
              <div className="text-center w-4/5 flex flex-col gap-5">
                <h1 className="text-white font-bold text-[1.6vw]">
                  Try it Online
                </h1>
                <p className="text-lg text-start">
                Enter X and Y axis cell numbers for processing. The model, on
                AWS Lambda's serverless platform, will play the game and display
                the GIF response (Coool right ?!). <br />{" "}
                <p className="font-bold">
                  {" "}
                  Note: Exceeding about 20 cells may lead to prolonged
                  processing, risking API timeout. (AWL Lambda is serverless and the code execution might take a bit longer)
                </p>
                </p>
                <form className="flex flex-1 flex-col gap-[2vh]">
                  <input
                    className="p-[2vh] lg:p-[10px] bg-transparent border-white border-[1px] rounded-2xl text-white"
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
                    className="p-[2vh] lg:p-[10px] bg-transparent border-white border-[1px] rounded-2xl text-white"
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
                      className="text-xl text-white p-[2vh] lg:p-[20px] border-none bg-orange-500 hover:bg-orange-400 cursor-pointer font-semibold shadow rounded-md transition ease-in-out duration-150"
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
              <div className="flex flex-col flex-1 h-full w-full items-center gap-5 ">
                <img
                  className="w-full h-1/2 rounded-xl object-fit "
                  src={imageURL}
                  alt=""
                />

                <button
                  onClick={() => {
                    setImageUrl(null);
                  }}
                  className="text-xl text-white p-[2vh] lg:p-[20px] border-none bg-orange-500 hover:bg-orange-400 cursor-pointer font-semibold shadow rounded-md transition ease-in-out duration-150"
                >
                  Try again?
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOne;
