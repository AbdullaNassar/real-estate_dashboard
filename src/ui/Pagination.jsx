import React from "react";

export default function Pagination({
  disabledNext,
  disabledPrev,
  onClickNext,
  onCLickPrev,
}) {
  return (
    <div className=" flex justify-center md:justify-end gap-2.5 mt-2 ">
      <button
        onClick={onCLickPrev}
        disabled={disabledPrev}
        className="bg-gray-200 px-4 py-2 rounded-sm hover:bg-blue-500 hover:text-white hover:cursor-pointer transition-all disabled:bg-stone-400 disabled:text-white "
      >
        &lt; Previous
      </button>
      <button
        onClick={onClickNext}
        disabled={disabledNext}
        className="bg-gray-200 px-4 py-2 rounded-sm hover:bg-blue-500 hover:text-white hover:cursor-pointer transition-all disabled:bg-stone-400 disabled:text-white "
      >
        Next &gt;
      </button>
    </div>
  );
}
