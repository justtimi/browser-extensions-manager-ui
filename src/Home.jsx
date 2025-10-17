import React from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";

const Home = () => {
  return (
    <div className="px-14 py-7 font-noto">
      <Navbar />
      <Gallery />
    </div>
  );
};

export default Home;
