import Carousel from "./Carousel";
import { useState } from "react";
const item = {
  id: 1,
  title: "Reinforcement Learning Agent Playing PySnake Game",
  img: "https://www.coolmathgames.com/sites/default/files/Snake_OG-logo.jpg",
  result:
    "https://github.com/Alirezad126/PySnake/blob/main/results/score_61.gif?raw=true",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ex vitae sapien bibendum tristique. Suspendisse lacinia, nunc eu iaculis mollis, tellus arcu tristique lectus, non tempus tellus turpis vel enim ",
};

const ProjectOne = () => {
  const [showResults, setShowResults] = useState(false);
  const handleResults = () => {
    if (showResults === false){
      setShowResults(true)
    }
  };

  return (
    <section>
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-4/5 h-full m-auto flex gap-[2vw] items-center">
          <div className="flex flex-col gap-3 h-4/5 w-2/3 justify-center items-center">
            <div className="w-full h-1/3 flex justify-center">
              <img
                className="h-full w-3/5 rounded-xl object-fit "
                src={item.img}
                alt=""
              />
            </div>
            <div className="text-center w-3/5">
              <h1 className="text-white font-bold text-[1.6vw]">
                {item.title}
              </h1>
            </div>
            <div className="w-full h-1/2 flex ">
              <Carousel />
            </div>
          </div>

          <div className="flex flex-col gap-3 h-3/4 w-1/3 p-[30px] justify-center items-center">
            <div className="text-center w-4/5">
              <h1 className="text-white font-bold text-[1.6vw]">
                Live Deployment
              </h1>
            </div>
            {showResults && (
              <div className="flex-1 h-1/2 ">
                <img
                  className="w-full h-full rounded-xl object-fit "
                  src={item.result}
                  alt=""
                />
              </div>
            )}

            <div className="h-1/6 pt-10 text-center">
              <button
                onClick={handleResults}
                className=" text-white p-[2vh] lg:p-[20px] border-none rounded-xl bg-orange-600 cursor-pointer font-medium"
              >
                {" "}
                Click Me!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOne;
