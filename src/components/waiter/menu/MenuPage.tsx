import { Card } from "./Card";
import { FilterBtn } from "./FilterBtn";
import { ProductOrder } from "./ProductOrder";
import { Input } from "./Input";
import clientIcon from "./../../../assets/icons/client.png";
import cafeOrder from "./../../../assets/cafe-americano-order.png";
export const MenuPage = () => {
  return (
    <div className="flex justify-center gap-8 pt-5 mx-auto max-w-screen-sm">
      <section className="md:w-1/2">
        <input type="text" placeholder="Buscador de producto" />
        <div className="flex justify-center gap-2">
          <FilterBtn nameFilter="Todos"></FilterBtn>
          <FilterBtn nameFilter="Desayuno"></FilterBtn>
          <FilterBtn nameFilter="Almuerzo"></FilterBtn>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </section>
      <section className="md:w-1/2">
        <div className="border border-orange-400 rounded-lg w-full">
          <form className="text-center">
            <div className="bg-orange-400 py-3 text-white font-inter font-bold text-lg rounded-t-lg text-center ">
              Nuevo pedido
            </div>
            <div className="p-3">
              <Input icon={clientIcon} placeholder="Nombre de cliente" />
            </div>
            <div className="mx-3">
              <ProductOrder img={cafeOrder} />
              <ProductOrder img={cafeOrder} />
              <ProductOrder img={cafeOrder} />
              <ProductOrder img={cafeOrder} />
            </div>
            <div className="flex justify-between mx-3 py-4">
              <span className="font-bold text-orange-400">Total</span>
              <span className="font-bold text-orange-400">$30.00</span>
            </div>
            <button className="bg-orange-400 w-3/4 p-2 my-4 rounded-xl text-white font-bold cursor-pointer ease-out duration-300 ">
              Enviar Pedido
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
