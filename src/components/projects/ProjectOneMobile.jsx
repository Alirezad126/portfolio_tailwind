import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

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
    setShowResults(!showResults);
  };
  const slides = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ex vitae sapien bibendum tristique. Suspendisse lacinia, nunc eu iaculis mollis, tellus arcu tristique lectus, non tempus tellus turpis vel enim ",
    },

    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ex vitae Suspendisse lacinia, nunc eu iaculis mollis, tellus arcu tristique lectus, non tempus tellus turpis vel enim . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ex vitae sapien bibendum tristique. Suspendisse lacinia, nunc eu iaculis mollis, tellus arcu tristique lectus, non tempus tellus turpis vel enim .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ex vitae sapien bibendum tristique. Suspendisse lacinia, nunc eu iaculis mollis, tellus arcu tristique lectus, non tempus tellus turpis vel enim .Suspendisse lacinia, nunc eu iaculis mollis, tellus arcu tristique lectus, non tempus tellus turpis vel enim ",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. tellus turpis vel enim ",
    },
    {
      divs: (
        <div className="flex flex-col gap-3 p-[10px] justify-center items-center">
          {showResults && (
            <div className="w-full h-full">
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
              className="heroButtons p-[10px] font-semibold text-base cursor-pointer border-2 rounded-full  bg-transparent z-50"
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
        <div className="text-[1.7vh] text-justify">
          {slides[currentIndex].text}
        </div>
        <div className="flex m-auto w-4/5 h-full duration-400 items-center justify-center ">
          {slides[currentIndex].divs}
        </div>
        {/* Left Arrow */}
        <div
          onClick={prevSlide}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-10px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        >
          <BsChevronCompactLeft size={15} />
        </div>
        {/* Rigth Arrow */}
        <div
          onClick={nextSlide}
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-10px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        >
          <BsChevronCompactRight size={15} />
        </div>
      </div>
    </section>
  );
}

export default ProjectOneMobile;
