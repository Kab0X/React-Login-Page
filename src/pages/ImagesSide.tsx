import Description from "./ImagesLeft/Description";
import Images from "./ImagesLeft/Images";
import Logo from "./ImagesLeft/Logo";
import ScrollList from "./ImagesLeft/ScrollList";

function ImagesSide() {
    return (
        <div className="basis-5/12 bg-zinc-200">
            <div className="w-full max-w-lg mx-32 mt-28 flex flex-col">
                <Logo />
                <Images />
                <Description />
                <ScrollList />
            </div>
        </div>
    );
}

export default ImagesSide;