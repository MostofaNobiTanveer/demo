import React from "react";

const SectionHeader = ({ index, section, title, excerpt }) => {
  return (
    <div className="grid grid-cols-12 py-40 items-start">
      <div className="col-span-2 mt-2">
        <p className="text-sm">
          {"0" + index}/ {section}
        </p>
      </div>
      <h1 class="col-start-5 col-span-full text-7xl tracking-tight mb-20">
        {title}
      </h1>
      <p class="col-start-7 col-span-full text-lg opacity-80">{excerpt}</p>
    </div>
  );
};

export default SectionHeader;
