import React from "react";
import Toggle from "./Toggle";

const Card = ({ extension, onToggle, onRemove }) => {
  return (
    <div className="bg-white p-4 rounded-2xl flex flex-col justify-between h-43 drop-shadow">
      <div className="flex gap-4">
        <img src={extension.logo} alt="logo for each extension" />
        <div className="flex flex-col">
          <h3 className="font-bold text-[18px]">{extension.name}</h3>
          <p className="text-base font-normal">{extension.description}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button onClick={onRemove} className=" border border-gray-400 rounded-full px-4 font-medium py-2">
          Remove
        </button>
        <Toggle isOn={extension.isActive} onToggle={onToggle} />
      </div>
    </div>
  );
};

export default Card;
