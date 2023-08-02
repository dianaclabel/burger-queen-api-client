import deleteIcon from "./../../../assets/icons/delete.png";
import addIcon from "./../../../assets/icons/add.png";
import minusIcon from "./../../../assets/icons/minus.png";
export function ProductOrder({ img }: { img: string }) {
  return (
    <div className="flex justify-between gap-4 pb-2 pt-5 border-b-[1px] border-orange-400">
      <div className="flex gap-4">
        <div>
          <img src={img} alt="product" className="w-14" />
        </div>
        <div className="text-sm flex flex-col items-start">
          <p className="font-bold font-inter ">Cafe Americano</p>
          <p>$5.00</p>
        </div>
      </div>
      <div className="flex flex-col justify-between ">
        <div className="flex justify-end">
          <img src={deleteIcon} alt="trash" className="w-6" />
        </div>
        <div className="flex flex-end">
          <img src={minusIcon} alt="rest" />
          <p className="font-bold">1</p>
          <img src={addIcon} alt="more" />
        </div>
      </div>
    </div>
  );
}
