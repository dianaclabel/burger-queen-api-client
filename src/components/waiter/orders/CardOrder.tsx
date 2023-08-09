import cafe from "../../../assets/cafe-americano-order.png";

export const CardOrder = () => {
  return (
    <div className="flex justify-between px-10 items-center my-3">
      <div>
        <img src={cafe} alt="/" />
      </div>
      <p className="text-lg text-[#372F2A]">Café americano</p>
      <p className="font-bold">2</p>
    </div>
  );
};
