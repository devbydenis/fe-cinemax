import { Link } from "react-router-dom";
import testImage from "../assets/test-image-card.png";

type CardPRops = {
  category: string;
};

function Card(props: CardPRops) {
  const { category } = props;

  return (
    <>
      {/* looping card disini */}
      <div className="mb-5 h-fit w-[9.5rem] text-center md:w-[18.5rem]">
        <div
          className="poster-background mb-2.5 h-56 w-[9.5rem] rounded-2xl md:h-[27.75rem] md:w-[296px]"
          style={{
            backgroundImage: `url(${testImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <Link
          className="text-xs leading-4 font-semibold md:text-xl md:leading-7"
          to={""}
        >
          Judul Film
        </Link>
        {category === "now playing" && (
          <ul className="mt-1.5 flex justify-center gap-1 md:gap-2">
            <li className="text-gray-secondary bg-silver rounded-full px-2 py-1.5 text-[0.75rem] leading-3 md:px-3 md:py-2 md:text-base md:leading-6">
              Genre 1
            </li>{" "}
            {/*- batesin genrenya 2 pertama aja */}
            <li className="text-gray-secondary bg-silver rounded-full px-2 py-1.5 text-[0.75rem] leading-3 md:px-3 md:py-2 md:text-base md:leading-6">
              Genre 2
            </li>
          </ul>
        )}
        {category === "coming soon" && (
          <div className="flex justify-center mt-1">
            <p className="bg-orange-secondary text-orange rounded px-2 py-1 text-[10px] md:px-4 md:py-2 md:text-base w-fit">
              20 Januari 2025
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
