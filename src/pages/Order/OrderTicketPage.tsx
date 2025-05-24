import { Link } from "react-router-dom";

function OrderTicketPage() {
  const subStrTitle = (str) => {
    return str.substring(0, 12) + '...'
  } 

  return (
    <section className='bg-[#f5f6f8] md:grid md:grid-cols-2'>
      <section 
        className='thankyou relative bg-cover bg-center h-[600px] md:h-full row-span-2'
        style={{ backgroundImage: "url('src/assets/background.png')" }}
      >
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='relative z-10 flex flex-col items-center gap-5 h-full justify-center mx-6 px-10'>
          <img src="src/assets/tickitz-large.svg" alt="logo" />
          <h1 className='font-bold text-4xl text-white text-center'>Thankyou For Purchasing</h1>
          <p className='text-secondary text-center'>Lorem ipsum dolor sit amet consectetur. Quam pretium pretium tempor integer sed magna et.</p>
          <Link className='text-lg font-bold text-white' to={'#'}>Please Download Your Ticket</Link>
          <button className='active:scale-95 hover:scale-110' type='button'>
            <img className='w-10' src="src/assets/download.svg" alt="download-icon" />
          </button>
        </div>
      </section>
      <section className='ticket-result mx-6 md:mx-16 px-6 py-8 flex flex-col items-center my-14 bg-white rounded-lg'>
        <img src="src/assets/qrcode.svg" alt="qrcode" />
        <div className="border-dashed border-b-2 border-secondary my-5 pt-5 w-full">
          <div className="absolute rounded-full w-10 h-10 bg-[#f5f6f8] -mt-5 left-3"></div>
          <div className="absolute rounded-full w-10 h-10 bg-[#f5f6f8] -mt-5 right-3"></div>
        </div>
        <div className='ticket-info mt-10 grid grid-cols-2 gap-x-5 gap-y-3 w-full'>
          <div className="pl-[30%]">
            <p className='text-xs text-[#AAAAAA]'>Movie</p>
            <p className='text-sm font-semibold text-[#14142B]'>
              {
                'spiderman: home coming'.length >= 12
                  ? subStrTitle('spiderman: home coming')
                  : 'spiderman: home coming'
              }
              </p>
          </div>
          <div className="pl-[30%]">
            <p className='text-xs text-[#AAAAAA]'>Category</p>
            <p className='text-sm font-semibold text-[#14142B] mt-1'>PG-13</p>
          </div>
          <div className="pl-[30%]">
            <p className='text-xs text-[#AAAAAA]'>Date</p>
            <p className='text-sm font-semibold text-[#14142B] mt-1'>07 Jul</p>
          </div>
          <div className="pl-[30%]">
            <p className='text-xs text-[#AAAAAA]'>Time</p>
            <p className='text-sm font-semibold text-[#14142B] mt-1'>2.00pm</p>
          </div>
          <div className="pl-[30%]">
            <p className='text-xs text-[#AAAAAA]'>Count</p>
            <p className='text-sm font-semibold text-[#14142B] mt-1'>3pcs</p>
          </div>
          <div className="pl-[30%]">
            <p className='text-xs text-[#AAAAAA]'>Seats</p>
            <p className='text-sm font-semibold text-[#14142B] mt-1'>C4, C5, C6</p>
          </div>
          <div className='col-span-2 border flex items-center justify-between px-5 mt-10 py-3 mx-10 rounded border-secondary'>
            <p className='text-title-info-first font-bold text-lg'>Total</p>
            <p className='text-lg text-[#14142B] mt-1'>$30</p>
          </div>
        </div>
      </section>
      <section className=' flex flex-col gap-3 mx-6 md:mx-16 pb-5'>
        <button className='bg-primary text-white font-bold py-3 rounded active:scale-95 transition-all' type='button'>Download</button>
        <button className='outline-2 outline-primary font-bold rounded py-3 active:scale-95 transition-all' type='button'>Done</button>
      </section>
    </section>
  )
}

export default OrderTicketPage;
