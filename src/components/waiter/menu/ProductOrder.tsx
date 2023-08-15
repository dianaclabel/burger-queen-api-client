import deleteIcon from "./../../../assets/icons/delete.png";
import addIcon from "./../../../assets/icons/add.png";
import minusIcon from "./../../../assets/icons/minus.png";
import { TOrderItem } from "../../../types/order";
import { useContext } from "react";
import { NewOrderContext } from "../../../context/newOrder";

export function ProductOrder({ item }: { item: TOrderItem }) {
  const { removeItem, increment, decrement } = useContext(NewOrderContext);
  return (
    <div className="flex justify-between gap-4 pb-2 pt-5 border-b-[1px] border-orange-400">
      <div className="flex gap-4">
        <img
          src={item.product.image}
          alt="product"
          className="w-16  object-cover object-center aspect-square rounded-md"
        />

        <div className="text-sm flex flex-col items-start justify-between">
          <p className="font-bold font-inter text-left">{item.product.name}</p>
          <p className="font-bold text-orange-400 ">S/.{item.product.price}</p>
        </div>
      </div>
      <div className="flex flex-col justify-between ">
        <div className="flex justify-end">
          <button onClick={() => removeItem(item.product)}>
            <img src={deleteIcon} alt="trash" className="w-6" />
          </button>
        </div>
        <div className="flex flex-end">
          <button onClick={() => decrement(item.product)}>
            <img src={minusIcon} alt="rest" />
          </button>
          <p className="font-bold">{item.qty}</p>
          <button onClick={() => increment(item.product)}>
            <img src={addIcon} alt="more" />
          </button>
        </div>
      </div>
    </div>
  );
}
