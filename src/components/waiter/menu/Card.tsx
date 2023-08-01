import cafeAmericano from "../../../assets/cafe-americano.png";
export const Card = () => {
  return (
    <div className="border-2 border-orange-400 w-36 h-48 rounded-xl flex flex-col items-center">
      <img src={cafeAmericano} alt="img-product" />
      <p className="font-bold text-base mt-[6px] ">Cafe americano</p>
      <p>$5.00</p>
      <button className="bg-orange-400 text-white rounded-md p-1 w-3/4">
        Agregar
      </button>
    </div>
  );
};
