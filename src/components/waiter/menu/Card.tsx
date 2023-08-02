type Props = {
  imgUrl: string;
  nameProduct: string;
  price: number;
};
export const Card = ({ imgUrl, nameProduct, price }: Props) => {
  return (
    <div className="border-2 border-orange-400 rounded-xl flex flex-col items-center">
      <img
        src={imgUrl}
        alt="img-product"
        className="w-full aspect-[4/3] object-cover object-center rounded-t-xl "
      />
      <p className="font-bold text-sm mt-3 text-center line-clamp-1 ">
        {nameProduct}
      </p>
      <p className="my-2">S/.{price}</p>
      <button className="bg-orange-400 text-white rounded-md p-1 mb-3 w-3/4  hover:bg-orange-500">
        Agregar
      </button>
    </div>
  );
};
