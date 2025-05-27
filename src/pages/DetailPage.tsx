import background_detail from "../assets/background_detail.png";
import testImage from "../assets/test-image-card.png";
import ebvid from "../assets/ebvid-logo.svg";
import hiflix from "../assets/hiflix-logo.svg";
import cineone21 from "../assets/cineone21-logo.svg";
import { FiSearch } from "react-icons/fi";

function DetailPage() {
  return (
    <>
      <Banner />
      <SetOrder />
    </>
  );
}
function Banner() {
  return (
    <section
      className="relative h-[32.5rem] rounded-[3rem] bg-cover bg-center bg-no-repeat md:my-10 md:h-[28.125rem]"
      style={{ backgroundImage: `url(${background_detail})` }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 rounded-4xl bg-black opacity-50"></div>
      <div className="absolute z-40 grid h-full grid-cols-1 justify-items-center gap-10 px-6 py-4 text-white md:top-10 md:grid-cols-[1fr_3fr] md:items-start md:justify-items-start lg:top-40 lg:grid-cols-[20rem_1fr_1fr]">
        <div className="order-2 lg:order-1 lg:row-span-2">
          <img src={testImage} alt="movie-poster" className="rounded-2xl" />
        </div>
        <div className="order-1 md:col-span-2">
          <h1 className="text-4xl font-semibold md:text-[4rem]">TITLE</h1>
          <p className="mt-4 leading-6 font-light md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro magni
            nihil numquam earum debitis incidunt ut? Doloribus aperiam, rem
            incidunt quod modi, nostrum at, illum perferendis itaque dolorum
            repellat nihil. Voluptas rem et unde quod possimus beatae,
            asperiores, facere ipsa sunt veniam cumque neque natus, eius vero ab
            nostrum repellendus.
          </p>
          <ul className="mt-5 flex justify-center gap-3 md:justify-start">
            <li
              className={`focus:border-orange min-w-fit cursor-pointer rounded-3xl border border-black px-4 py-2 font-medium text-white uppercase`}
            >
              Genre 1
            </li>
            <li
              className={`focus:border-orange min-w-fit cursor-pointer rounded-3xl border border-black px-4 py-2 font-medium text-white uppercase`}
            >
              Genre 1
            </li>
            <li
              className={`focus:border-orange min-w-fit cursor-pointer rounded-3xl border border-black px-4 py-2 font-medium text-white uppercase`}
            >
              Genre 1
            </li>
          </ul>
        </div>
        <div className="text-black-primary order-3 lg:col-span-2">
          <ul className="grid-col-6 flex grid-flow-col grid-rows-2 flex-col items-start gap-x-10 gap-y-7 md:grid md:gap-y-0 md:pt-30 lg:pt-0">
            <li className="col-span-2">
              <h2 className="text-black-primary text-lg font-light">
                Release Date
              </h2>
              <p className="text-xl leading-7 font-semibold">March 31, 2025</p>
            </li>
            <li className="col-span-2">
              <h2 className="text-black-primary text-lg font-light">
                Directed By
              </h2>
              <p className="text-xl leading-7 font-semibold">Ryan Adriandhy</p>
            </li>
            <li className="col-span-4">
              <h2 className="text-black-primary text-lg font-light">
                Duration
              </h2>
              <p className="text-xl leading-7 font-semibold">
                1 hours 42 minutes
              </p>
            </li>
            <li className="col-span-4">
              <h2 className="text-black-primary text-lg font-light">Cast</h2>
              <p className="text-xl leading-7 font-semibold">
                Prince Poetiray, Quinn Salman, Graciella Abigail, M. Yusuf
                Ozkan, M. Adhiyat, Angga Yunanda
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function SetOrder() {
  return (
    <section className="mt-[50rem] sm:mt-[45rem] md:mt-[20rem] my-[10rem] md:mb-[-15rem] h-screen px-5 py-10">
      <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <h2 className="text-2xl leading-7 font-semibold col-span-3">Book Tickets</h2>
        <div className="choose-date flex flex-col col-span-2 md:col-span-1">
          <label
            className="text-black-primary text-lg font-semibold mb-3"
            htmlFor="date"
          >
            Choose Date
          </label>
          <div className="flex items-center gap-4 rounded-full border-2 px-5 py-3">
            <FiSearch />
            <input
              className="outline-none"
              type="date"
              id="date"
              placeholder="Select date"
            />
          </div>
        </div>
        <div className="choose-time col-span-2 md:col-span-1">
          <h2 className="text-black-primary mb-3 text-lg font-semibold">
            Choose Time
          </h2>
          <div className="flex items-center gap-4 rounded-full border-2 px-5 py-3">
            <FiSearch />
            <select className="outline-none" name="time" id="time">
              <option value="10.00">10.00</option>
              <option value="12.00">12.00</option>
              <option value="14.00">14.00</option>
              <option value="16.00">16.00</option>
              <option value="18.00">18.00i</option>
            </select>
          </div>
        </div>
        <div className="choose-location col-span-2 md:col-span-1">
          <h2 className="text-black-primary mb-3 text-lg font-semibold">
            Choose Location
          </h2>
          <div className="flex items-center gap-4 rounded-full border-2 px-5 py-3">
            <FiSearch />
            <select className="outline-none" name="location" id="location">
              <option value="Jakarta">Jakarta</option>
              <option value="Bogor">Bogor</option>
              <option value="Depok">Depok</option>
              <option value="Tangerang">Tangerang</option>
              <option value="Bekasi">Bekasi</option>
            </select>
          </div>
        </div>
        <div className="choose-cinema col-span-2 md:col-span-3">
          <h2 className="text-black-primary mb-3 text-lg font-semibold">
            Choose Cinema
          </h2>
          <div className="flex flex-col items-center gap-5 md:gap-10 md:flex-row md:justify-center">
            <label
              className="group has-checked:bg-orange flex h-35 w-3/4 md:w-60 items-center justify-center rounded bg-gray-300 p-3 opacity-50 transition-all has-checked:opacity-100"
              htmlFor="ebvid"
            >
              <img className="aspect-auto" src={ebvid} alt="ebvid" />
              <input
                className="hidden"
                type="radio"
                id="ebvid"
                value="ebvid"
                name="cinema"
              />
            </label>
            <label
              className="group has-checked:bg-orange flex h-35 w-3/4 md:w-60 items-center justify-center rounded bg-gray-300 p-3 opacity-50 transition-all has-checked:opacity-100"
              htmlFor="hiflix"
            >
              <img className="aspect-auto" src={hiflix} alt="hiflix" />
              <input
                className="hidden"
                type="radio"
                id="hiflix"
                value="hiflix"
                name="cinema"
              />
            </label>
            <label
              className="group has-checked:bg-orange flex h-35 w-3/4 md:w-60 items-center justify-center rounded bg-gray-300 p-3 opacity-50 transition-all has-checked:opacity-100"
              htmlFor="cineone21"
            >
              <img className="aspect-auto" src={cineone21} alt="cineone21" />
              <input
                className="hidden"
                type="radio"
                id="cineone21"
                value="cineone21"
                name="cinema"
              />
            </label>
          </div>
        </div>
        <button className="uppercase w-40 mx-auto mt-10 col-span-2 md:col-span-3 bg-orange py-3 text-white rounded-xl active:scale-95 transition-all" type="button">book now</button>
      </form>
    </section>
  );
}
export default DetailPage;