import React from 'react'

function Newslater() {
  return (
    <>
      <section className="bg-orange-secondary my-10 sm:mx-10 md:mx-20 rounded-[3rem] py-10 md:py-20">
        <form className="flex flex-col items-center gap-5 w-fit mx-auto">
          <h4 className="text-3xl leading-9 md:text-6xl font-semibold w-full text-center md:leading-[4.5rem]">Subscribe to Our Newsletter</h4>
          <div className="flex gap-5 w-full flex-col md:flex-row">
            <input type="text" placeholder="Enter your email" className="flex-1 rounded-full py-4 px-6 bg-white text-black border outline outline-black focus:outline-2 focus:outline-orange" />
            <input type="text" placeholder="Enter your name" className="flex-1 rounded-full py-4 px-6 bg-white text-black border outline outline-black focus:outline-2 focus:outline-orange" />
          </div>
          <button type="submit" className="bg-orange w-full px-3 py-5 rounded-full font-semibold uppercase text-white">Subscribe Now</button>
        </form>
      </section>
    </>
  )
}

export default Newslater