const SkillBar = ({ image, name }) => {
  return (
    <div className="w-1/4 flex flex-col gap-[5px] items-center ">
      <div>{image}</div>
      <p className="text-[0.8vw]">{name}</p>
    </div>
  );
};

export default SkillBar;
