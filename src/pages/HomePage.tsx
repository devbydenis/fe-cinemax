import Navbar from '../components/Navbar'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* BANNER HOME */}
        <section className='flex flex-col gap-4 justify-center items-center mt-7 md:mx-16 lg:mx-56'>
          <div className='bg-[#FDECE3] px-2 py-4 rounded-full font-extrabold text-orange '>
            <p>MOVIE TICKET PURCHASES #1 IN INDONESIA</p>
          </div>
          <div className='px-7'>
            <p className='font-normal text-5xl/14 text-center'>Experience the Magic of Cinema: <span className='text-orange font-bold'>Book Your Tickets Today</span></p>
          </div>
          <div>
            <p className='text-lg/6 text-center font-light'>Sign up and get the ticket with a lot of discount</p>
          </div>
        </section>


      </main>
    </>
  )
}

export default HomePage