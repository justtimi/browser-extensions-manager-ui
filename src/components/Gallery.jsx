import React, { useEffect, useState } from "react";
import Card from "./Card";

const Gallery = () => {
  const [extensions, setExtensions] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setExtensions(data))
      .catch((err) => console.error("Error checking JSON: ", err));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">

        {(extensions.length === 0) ? (
        <p>Loading...</p>
      ) : (
        extensions.map((item, i) => (
        <Card key={i} extension={item}/>
      ))
      )}
      
      
    </div>
  );
};

export default Gallery;
