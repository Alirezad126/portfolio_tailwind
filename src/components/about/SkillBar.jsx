const SkillBar = ({ image, name}) => {
  return (
    <div className="lg:w-1/4 flex flex-col gap-[5px] items-center ">
      <div>{image}</div>
      <p className="text-[1.8vh] sm:text-[10px] md:text-[10px] lg:text-[15px]">{name}</p>
    </div>
  );
};

export default SkillBar;
