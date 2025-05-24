
function TimelineProcess() {
  return (
    <section className="flex items-center justify-center gap-8 px-5">
      <div className="flex flex-col items-center">
        <span className={`rounded-full bg-orange text-white px-3 py-1 font-bold`}>1</span>
        <p className="text-orange">dates &amp; time</p>
      </div>
      <div className="w-10 border-b-2 border-dashed border-orange"></div>
      <div className="flex flex-col items-center">
        <span className={`rounded-full border-2 border-dashed border-orange px-3 py-1`}>2</span>
        <p>Seat</p>
      </div>
      <div className="w-10 border-b-2 border-dashed"></div>
      <div className="flex flex-col items-center">
        <span className={`rounded-full px-3 py-1 border-2 border-dashed border-orange`}>3</span>
        <p>Payment</p>
      </div>
    </section>
  );
}

export default TimelineProcess;
