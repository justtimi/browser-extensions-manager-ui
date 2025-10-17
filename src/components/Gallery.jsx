import React, { useEffect, useState } from "react";
import Card from "./Card";

const Gallery = ({ filter }) => {
  const [extensions, setExtensions] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setExtensions(data))
      .catch((err) => console.error("Error checking JSON: ", err));
  }, []);

  const handleToggle = (index) => {
    setExtensions((prev) =>
      prev.map((ext, i) =>
        i === index ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const handleRemove = (index) => {
    setExtensions((prev) => prev.filter((_, i) => i !== index));
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
    return true;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
      {filteredExtensions.length === 0 ? (
        <p>No extensions found.</p>
      ) : (
        filteredExtensions.map((item, i) => (
          <Card
            key={i}
            extension={item}
            onToggle={() => handleToggle(i)}
            onRemove={() => handleRemove(i)}
          />
        ))
      )}
    </div>
  );
};

export default Gallery;
