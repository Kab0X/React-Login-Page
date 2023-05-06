import { useState } from "react";

import GalleryPagination from "./GalleryPagination";
import GalleryLogo from "./GalleryLogo";
import GalleryItem from "./GalleryItem";

function Gallery() {
  const [currentPage, setPage] = useState<number>(3);

  return (
    <div className="flex col-span-5 items-center justify-center bg-[#f5f7f9]">
      <div className="items-between flex flex-col justify-center">
        <GalleryLogo />
        <GalleryItem currentPage={currentPage} />
        <div className="mt-16 flex justify-center">
          <GalleryPagination currentPage={currentPage} setPage={setPage} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
