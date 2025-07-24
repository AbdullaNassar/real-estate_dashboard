import React from "react";

const Spinner = () => {
  return (
    <div className=" flex justify-center items-center">
      <div
        className="w-16 aspect-square rounded-full mx-auto animate-spin"
        style={{
          background:
            "radial-gradient(farthest-side, #3b82f6 94%, #0000) top/10px 10px no-repeat, conic-gradient(#0000 30%, #3b82f6)",
          WebkitMask:
            "radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0)",
          mask: "radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0)",
        }}
      />
    </div>
  );
};

export default Spinner;
