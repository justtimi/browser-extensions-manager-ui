import React from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";

const Home = () => {
  const [filter, setFilter] = React.useState("all");

  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];
  return (
    <div className="px-14 py-7 font-noto">
      <Navbar />
      <div className="flex justify-between items-center py-8">
        <h2 className="text-gray-700 font-bold text-3xl tracking-tighter">Extensions List</h2>

        <ul className="flex gap-2">
          {filterOptions.map((opt) => (
            <li
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={`cursor-pointer rounded-full px-4 font-medium py-2 border border-gray-400 
                ${filter === opt.value ? "bg-red-700 text-white" : "bg-white text-gray-700"}`}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      </div>
      <Gallery filter={filter} />
    </div>
  );
};

export default Home;
