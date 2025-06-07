function DashboardPage() {
  return (
    <>
      <SalesChart />
      <TicketSales />
    </>
  );
}

function SalesChart() {
  return (
    <section className="bg-white rounded-3xl md:mx-32 mt-11 px-14 py-10 h-screen min-w-md">
        <h1 className="text-2xl font-bold mb-5">Sales Chart</h1>
        <div className="flex gap-5 flex-wrap">
          <div className="flex rounded-lg bg-[#EFF0F6] px-5 py-3">
            <input className="focus:outline-none" type="text" name="movieName" id="movieName" placeholder="Movie Name" />
            {/* <img src={search} alt="search" /> */}
          </div>
          <div>
            <select  className="bg-[#EFF0F6] rounded-lg px-5 py-3" name="period" id="period">
              <option value="Choose Period">Choose period</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <button className="bg-primary text-white font-bold rounded-lg px-8 py-2" type="button">
            Filter
          </button>
        </div>
        <p className="text-xl font-semibold text-center my-20">Avengers: Infinity Wars</p>
        <div className="grid grid-cols-[40px_repeat(4,1fr)] grid-rows-[repeat(5,1fr)_40px]">
          <p className="text-xs font-normal text-title-info-first">$800</p>
          <p className="text-xs font-normal text-title-info-first">$600</p>
          <p className="text-xs font-normal text-title-info-first">$400</p>
          <p className="text-xs font-normal text-title-info-first">$200</p>
          <p className="text-xs font-normal text-title-info-first">$0</p>
          <p className="text-xs font-normal text-title-info-first"></p>
          {/* <img className="w-full col-start-2 col-end-9 row-start-1 row-end-6" src={graph} alt="graph"/> */}
          <p className="text-xs font-normal text-title-info-first">Jan</p>
          <p className="text-xs font-normal text-title-info-first">Feb</p>
          <p className="text-xs font-normal text-title-info-first">Mar</p>
          <p className="text-xs font-normal text-title-info-first">Mei</p>
          <p className="text-xs font-normal text-title-info-first">Jun</p>
          <p className="text-xs font-normal text-title-info-first"></p>
        </div>
      </section>
  )
}

function TicketSales() {
  return (
    <section className="bg-white rounded-3xl m`d:mx-32 mt-11 px-14 py-10 h-screen min-w-md">
        <h1 className="text-2xl font-bold mb-5">Ticket Sales</h1>
        <div className="flex gap-5 flex-wrap">
          <div className="flex rounded-lg bg-[#EFF0F6] px-5 py-3">
            <input className="focus:outline-none" type="text" name="movieName" id="movieName" placeholder="Movie Name" />
            {/* <img src={search} alt="search" /> */}
          </div>
          <div>
            <select  className="bg-[#EFF0F6] rounded-lg px-5 py-3" name="period" id="period">
              <option value="Choose Period">Choose period</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <button className="bg-primary text-white font-bold rounded-lg px-8 py-2" type="button">
            Filter
          </button>
        </div>
        <p className="text-xl font-semibold text-center my-20">Adventure, Purwokerto</p>
        <div className="grid grid-cols-[40px_repeat(4,1fr)] grid-rows-[repeat(5,1fr)_40px]">
          <p className="text-xs font-normal text-title-info-first">$800</p>
          <p className="text-xs font-normal text-title-info-first">$600</p>
          <p className="text-xs font-normal text-title-info-first">$400</p>
          <p className="text-xs font-normal text-title-info-first">$200</p>
          <p className="text-xs font-normal text-title-info-first">$0</p>
          <p className="text-xs font-normal text-title-info-first"></p>
          {/* <img className="w-full col-start-2 col-end-9 row-start-1 row-end-6" src={graph} alt="graph"/> */}
          <p className="text-xs font-normal text-title-info-first">Jan</p>
          <p className="text-xs font-normal text-title-info-first">Feb</p>
          <p className="text-xs font-normal text-title-info-first">Mar</p>
          <p className="text-xs font-normal text-title-info-first">Mei</p>
          <p className="text-xs font-normal text-title-info-first">Jun</p>
          <p className="text-xs font-normal text-title-info-first"></p>
        </div>
      </section>
  )
}

export default DashboardPage;
