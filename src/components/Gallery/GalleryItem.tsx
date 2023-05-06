import { useEffect } from "react";
import image from "/src/assets/images/images2.png";

function GalleryItem({ currentPage }: { currentPage: number }) {
  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className="mt-16">
        <img src={image} className="h-96" />
      </div>
      <div>
        <p className="mb-6 mt-10 text-4xl font-bold">Welcome back!</p>
        <div className="text-2xl text-gray-500">
          <p>Start managing your finance faster and better</p>
          <p>Start managing your finance faster and better</p>
        </div>
      </div>
    </>
  );
}

export default GalleryItem;
