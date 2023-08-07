import { useContext } from "react";
import { NewOrderContext } from "../../../context/newOrder";
import { TProduct } from "../../../types/product";

type Props = {
  product: TProduct;
};

export const Card = ({ product }: Props) => {
  const { addItem } = useContext(NewOrderContext);

  const handleAddProduct = () => {
    addItem(product);
  };

  return (
    <div className="border-2 border-orange-400 rounded-xl flex flex-col items-center">
      <img
        src={product.image}
        alt="img-product"
        className="w-full aspect-[4/3] object-cover object-center rounded-t-xl "
      />
      <p className="font-bold text-sm mt-3 text-center line-clamp-1 ">
        {product.name}
      </p>
      <p className="my-2">S/.{product.price}</p>
      <button
        onClick={handleAddProduct}
        className="bg-orange-400 text-white rounded-md p-1 mb-3 w-3/4  hover:bg-orange-500"
      >
        Agregar
      </button>
    </div>
  );
};
