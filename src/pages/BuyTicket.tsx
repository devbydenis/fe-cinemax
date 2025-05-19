import Newslater from "../components/Newslater"
import background_img from "../assets/background_img.png"
import Chip from "../components/Chip"

function BuyTicket() {
  return (
    <>
      <section>
        <section 
          className="relative h-[32.5rem] md:h-[28.125rem] rounded-[3rem] m-5 md:mx-20 md:my-10 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${background_img})` }}
        >
          <div className="absolute z-10 rounded-4xl top-0 left-0 right-0 bottom-0 bg-linear-to-t from-[#000000] to-[#ffffff0c]"></div>
          <div className="absolute z-40 flex flex-col items-center md:items-start justify-end text-center md:text-start gap-4 text-white h-full px-6 py-4">
            <Chip value="list movie of the week" />
            <h1 className="text-3xl md:text-4xl font-semibold">Experience the Magic of Cinema: <span className="text-orange">Book Your Tickets Today</span></h1>
            <p>Sign up and get the ticket with a lot of discount</p>
          </div>
        </section>
        <section>
          <div>menu</div>
          <div>render film disini</div>
        </section>
        <Newslater />
      </section>
    </>
  )
}

export default BuyTicket