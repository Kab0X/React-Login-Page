import { useState } from "react";

import leftArrowIcon from "/src/assets/images/leftArrow.svg";
import rightArrowIcon from "/src/assets/images/rightArrow.svg";

function GalleryPagination({
  currentPage,
  setPage,
}: {
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const prev = () => {
    if (currentPage === 1) return;
    setPage(currentPage - 1);
  };

  const next = () => {
    if (currentPage === 5) return;
    setPage(currentPage + 1);
  };

  return (
    <div className="flex items-center gap-x-8">
      <img
        src={leftArrowIcon}
        onClick={prev}
        className="mr-8 h-4 w-4 cursor-pointer select-none"
      />
      {[1, 2, 3, 4, 5].map((number) => (
        <div
          key={number}
          className={`aspect-square h-2 w-2 rounded-full transition ${
            currentPage === number ? "bg-slate-600" : "bg-slate-300"
          }`}
        ></div>
      ))}
      <img
        src={rightArrowIcon}
        onClick={next}
        className="ml-8 h-4 w-4 cursor-pointer select-none"
      />
    </div>
  );
}

export default GalleryPagination;
