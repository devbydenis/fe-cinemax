
type ChipProps = {
  value: string
}

function Chip(props: ChipProps) {
  return (
    <>
      <div className="bg-[#FDECE3] px-2 py-4 rounded-full font-extrabold text-orange w-fit">
        <p className="uppercase">{props.value}</p>
      </div>
    </>
  );
}

export default Chip;
