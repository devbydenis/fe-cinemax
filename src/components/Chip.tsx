
type ChipProps = {
  value: string
}

function Chip(props: ChipProps) {
  return (
    <>
      <div className="bg-[#ffffff16] px-8 py-4 rounded-full backdrop-blur-sm font-extrabold text-orange w-fit">
        <p className="uppercase">{props.value}</p>
      </div>
    </>
  );
}

export default Chip;
