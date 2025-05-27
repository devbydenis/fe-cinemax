type LoaderProps = {
  overlay: boolean
}
function Loader({overlay}: LoaderProps) {
  return (
    <>
      {/* <!-- From Uiverse.io by yohohopizza -->  */}
      <div className={`${!overlay && 'hidden'} absolute top-0 right-0 bottom-0 left-0 z-10 bg-black/50`}></div>
      <div className="absolute z-20 flex gap-2 justify-center items-center">
        <div className="h-4 w-4 animate-bounce rounded-full bg-orange"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-orange [animation-delay:-.3s]"></div>
        <div className="h-4 w-4 animate-bounce rounded-full bg-orange [animation-delay:-.5s]"></div>
      </div>
    </>
  );
}

export default Loader;
