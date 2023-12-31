import React from "react";

const PrimaryBtn = (prop) => {
  const { text, className } = prop;

  return (
    <div>
      <button
        className={`border-2 capitalize border-solid border-black rounded-full py-2 px-3 flex justify-center items-center active-shadow-btn ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default PrimaryBtn;
