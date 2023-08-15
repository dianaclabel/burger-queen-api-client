import { TOrderItem } from "../../../types/order";

export const CardOrderItem = ({ item }: { item: TOrderItem }) => {
  return (
    <div className="flex justify-between px-10 items-center my-3">
      <div>
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-14  object-cover object-center aspect-square rounded-md"
        />
      </div>
      <p className="text-lg text-[#372F2A]">{item.product.name}</p>
      <p className="font-bold">{item.qty}</p>
    </div>
  );
};
