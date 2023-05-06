import { useState } from "react";
import Description from "./ImagesLeft/Description";
import Images from "./ImagesLeft/Images";
import Logo from "./ImagesLeft/Logo";
import ScrollList from "./ImagesLeft/ScrollList";

function ImagesSide() {
    const [currentPage, setPage] = useState<number>(3);

    return (
        <div className="basis-5/12 bg-[#f5f7f9]">
            <div className="mx-36 mt-28 flex flex-col">
                <Logo />
                <Images currentPage={currentPage} />
                <Description />
                <div className="justify-center flex mt-16">
                    <ScrollList currentPage={currentPage} setPage={setPage} />
                </div>
            </div>
        </div>
    );
}

export default ImagesSide;