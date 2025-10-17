import React from "react";

const Toggle = () => {
  const [isOn, setIsOn] = React.useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };
  return (
    <button
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          handleToggle();
        }
      }} className={`relative inline-flex items-center w-12 h-6 rounded-full p-1 transition-all duration-300 outline-none ${
        isOn ? "bg-red-700 justify-end" : "bg-gray-300 justify-start"
      }`}
    >
      <span className="w-[18px] h-[18px] bg-white rounded-full shadow-md transition-transform duration-700 ease-in-out"></span>
    </button>
  );
};

export default Toggle;
