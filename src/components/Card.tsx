import {Link} from "react-router-dom";
import testImage from "../assets/test-image-card.png";
function Card() {
  return (
    <>
      {/* looping card disini */}
      <div className="text-center w-[9.5rem] h-fit md:w-[18.5rem] mb-5">
        <div
          className="poster-background h-56 md:h-[27.75rem] w-[9.5rem] md:w-[296px] rounded-2xl mb-2.5"
          style={
            {
              backgroundImage: `url(${testImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          }
        ></div>
        <Link
          className="font-semibold text-xs md:text-xl leading-4 md:leading-7"
          to={""}
        >
          Judul Film
        </Link>
        <ul className="flex justify-center gap-1 md:gap-2 mt-1.5">
          <li className="py-1.5 px-2 md:py-2 md:px-3 text-gray-secondary text-[0.75rem] md:text-base leading-3 md:leading-6 bg-silver rounded-full">
            Genre 1
          </li>{" "}
          {/*- batesin genrenya 2 pertama aja */}
          <li className="py-1.5 px-2 md:py-2 md:px-3 text-gray-secondary text-[0.75rem] md:text-base leading-3 md:leading-6 bg-silver rounded-full">
            Genre 2
          </li>
        </ul>
      </div>
    </>
  );
}

export default Card;
