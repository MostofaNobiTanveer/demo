import React from "react";

const TechItem = ({ item }) => {
  return (
    <>
      <div className="relative group">
        {item.name}
        <div className="absolute w-7 h-7 top-0 rotate-6 scale-0 group-hover:scale-100 group-hover:-translate-y-8 transition left-1/2 -translate-x-1/2">
          <img
            src={item.image}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      /
    </>
  );
};

export default TechItem;
