import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import {FaArrowRight} from "react-icons/fa6";
import Chip from "../components/Chip";
import affordable from "../assets/affordable.svg";
import customerService from "../assets/customerService.svg";
import guaranted from "../assets/guaranted.svg";
import logoTickitz from "../assets/tickitz-revert-logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import cineone21  from "../assets/cineone21-logo.svg";
import ebvid  from "../assets/ebvid-logo.svg";
import hiflix  from "../assets/hiflix-logo.svg";


function HomePage() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <NowPlaying />
        <WhyChooseUs />
        <UpComingMovies />
        <NewsLetter />
        <Footer />
      </main>
    </>
  );
}

function Banner() {
  return (
    <>
      <section className="flex flex-col gap-4 justify-center items-center mt-7 md:mx-16 lg:mx-56">
        <Chip value="MOVIE TICKET PURCHASES #1 IN INDONESIA" />
        <div className="px-7">
          <p className="font-normal text-5xl/14 text-center">
            Experience the Magic of Cinema:{" "}
            <span className="text-orange font-bold">
              Book Your Tickets Today
            </span>
          </p>
        </div>
        <div>
          <p className="text-lg/6 text-center font-light">
            Sign up and get the ticket with a lot of discount
          </p>
        </div>
      </section>
    </>
  );
}

function NowPlaying() {
  return (
    <>
      <section>
        <h2>Now Showing in Cinemas</h2>
        <div className="container-card ">
          {/* looping card disini */}
          <div>
            <img src="" alt="" />
            <Link to="">Judul Film</Link>
            <ul>
              <li>Genre 1</li> {/*- batesin genrenya 2-3 aja */}
              <li>Genre 2</li>
              <li>Genre 3</li>
            </ul>
          </div>
        </div>
        <Link to="" className="flex justify-center items-center gap-2">
          View All
          <FaArrowRight />
        </Link>
      </section>
    </>
  );
}

function WhyChooseUs() {
  return (
    <>
      <section>
        <div>
          <h2>Why Choose Us</h2>
          <h3>Unleashing the Ultimate Movie Experience</h3>
        </div>
        <div>
          <div>
            <img src={guaranted} alt="logo-why-choose-us" />
            <h4>Guaranted</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a.
            </p>
          </div>
          <div>
            <img src={affordable} alt="logo-why-choose-us" />
            <h4>Affordable</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a.
            </p>
          </div>
          <div>
            <img src={customerService} alt="logo-why-choose-us" />
            <h4>24/7 Customer Service</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function UpComingMovies() {
  return (
    <>
      <section>
        <div></div>
      </section>
    </>
  );
}

function NewsLetter() {
  return (
    <>
      <section>
        <h4>Subscribe to Our Newsletter</h4>
        <form>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <button type="submit">Subscribe Now</button>
        </form>
      </section>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className="bg-black-primary rounded-[3rem] text-white py-10 px-5 flex flex-col gap-8 sm:p-10 md:p-10 md:gap-20 sm:flex-row">
        <section className="flex-1">
          <img src={logoTickitz} alt="logo-tickitz" />
          <p className="text-base">Stop waiting in line. Buy tickets conveniently, watch movies quietly.</p>
        </section>
        <section className="flex-1">
          <section className="flex flex-col gap-10 items-center sm:flex-row sm:flex-wrap md:gap-10 ">
            <div className="flex flex-col gap-8">
              <h4 className="font-bold text-xl">EXPLORE</h4>
              <ul className="flex flex-col gap-4 items-center sm:items-start">
                <Link to={"#"}>Cinemas</Link>
                <Link to={"#"}>Movie List</Link>
                <Link to={"#"}>My Ticket</Link>
                <Link to={"#"}>Notification</Link>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h4 className="font-bold text-xl">OUR SPONSOR</h4>
              <ul className="flex flex-col gap-6 items-center sm:items-start">
                <li><img src={ebvid} alt="ebv.id" /></li>
                <li><img src={cineone21} alt="cineone21" /></li>
                <li><img src={hiflix} alt="hiflix" /></li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <h4 className="font-bold text-xl">FOLLOW US</h4>
              <ul className="flex flex-col gap-4 items-center sm:items-start">
                <span className="flex items-center gap-2.5">
                  <FaFacebook />
                  <p>tickitz.cinema.id</p>
                </span>
                <span className="flex items-center gap-2.5">
                  <FaInstagram />
                  <p>tickitz.cinema.id</p>
                </span>
                <span className="flex items-center gap-2.5">
                  <FaXTwitter />
                  <p>tickitz.cinema.id</p>
                </span>
                <span className="flex items-center gap-2.5">
                  <AiOutlineYoutube />
                  <p>tickitz.cinema.id</p>
                </span>
              </ul>
            </div>
          </section>
          <section className="mt-8 text-center">
            <p>© 2025 Tickitz. All Rights Reserved.</p>
          </section>
        </section>
      </footer>
    </>
  );
}
export default HomePage;
