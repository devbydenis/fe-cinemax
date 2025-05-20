import background_detail from "../../assets/background_detail.png";
import testImage from "../../assets/test-image-card.png";

function OrderTicketPage() {
  return (
    <>
      <section
        className="relative h-[32.5rem] rounded-[3rem] bg-cover bg-center bg-no-repeat md:my-10 md:h-[28.125rem]"
        style={{ backgroundImage: `url(${background_detail})` }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 z-10 rounded-4xl bg-black opacity-50"></div>
        <div className="absolute z-40 grid grid-cols-1 md:grid-cols-[1fr_3fr] lg:grid-cols-[20rem_1fr_1fr] justify-items-center md:justify-items-start gap-10 h-full px-6 py-4 text-white md:top-10 lg:top-40 md:items-start">
          <div className="order-2 lg:order-1 lg:row-span-2">
            <img src={testImage} alt="movie-poster" className="rounded-2xl" />
          </div>
          <div className="order-1 md:col-span-2">
            <h1 className="text-4xl font-semibold md:text-[4rem]">TITLE</h1>
            <p className="mt-4 leading-6 font-light md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              magni nihil numquam earum debitis incidunt ut? Doloribus aperiam,
              rem incidunt quod modi, nostrum at, illum perferendis itaque
              dolorum repellat nihil. Voluptas rem et unde quod possimus beatae,
              asperiores, facere ipsa sunt veniam cumque neque natus, eius vero
              ab nostrum repellendus.
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
          <div className="order-3 lg:col-span-2 text-black-primary" >
            <ul className="grid-col-6 flex grid-flow-col grid-rows-2 flex-col items-start gap-x-10 gap-y-7 md:gap-y-0 md:pt-30 lg:pt-0 md:grid">
              <li className="col-span-2">
                <h2 className="text-black-primary text-lg font-light">
                  Release Date
                </h2>
                <p className="text-xl leading-7 font-semibold">
                  March 31, 2025
                </p>
              </li>
              <li className="col-span-2">
                <h2 className="text-black-primary text-lg font-light">
                  Directed By
                </h2>
                <p className="text-xl leading-7 font-semibold">
                  Ryan Adriandhy
                </p>
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
      <section className="mt-[15rem] h-screen bg-gray-200"></section>
    </>
  );
}

export default OrderTicketPage;
