import logokIcon from "/src/assets/images/logo.png";

function GalleryLogo() {
  return (
    <div className="flex cursor-pointer gap-3 text-5xl">
      <img src={logokIcon} className="h-14 w-14" />
      <p>FINOTIC</p>
    </div>
  );
}

export default GalleryLogo;
