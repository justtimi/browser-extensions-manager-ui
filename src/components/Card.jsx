import React from "react";
import Toggle from "./Toggle";

const Card = ({ extension }) => {
  const [isOn, setIsOn] = React.useState(extension.isActive);
  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <div className="bg-white p-4 rounded-2xl flex flex-col justify-between h-43">
      <div className="flex gap-4">
        <img src={extension.logo} alt="" className="" />
        <div className="flex flex-col">
          <h3 className="font-bold">{extension.name}</h3>
          <p className="text-base font-normal">{extension.description}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button className="p-2 border border-gray-400 rounded-full px-4 font-medium py-2">
          Remove
        </button>
        <Toggle isOn={isOn} onToggle={() => handleToggle()} />
      </div>
    </div>
  );
};

export default Card;
