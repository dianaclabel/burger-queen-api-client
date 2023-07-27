import { Header } from "../Header";
import { Nav } from "../Nav";
import { Card } from "./Card";
import { FilterBtn } from "./FilterBtn";
import { ProductOrder } from "./ProductOrder";
import { Input } from "./Input";
import clientIcon from "./../../../assets/icons/client.png";

export const MenuPage = () => {
  return (
    <div>
      <Header role="Mesero/a" userName="Mario" />

      <main>
        <section className="grid grid-cols-2">
          <input type="text" placeholder="Buscador de producto" />
          <div>
            <FilterBtn nameFilter="Todos"></FilterBtn>
            <FilterBtn nameFilter="Desayuno"></FilterBtn>
            <FilterBtn nameFilter="Almuerzo"></FilterBtn>
          </div>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </section>
        <section className="w-[40%]">
          <div className="border border-orange-400 rounded-lg">
            <form>
              <div className="bg-orange-400 h-14 text-white font-inter font-bold text-lg rounded-t-lg text-center ">
                Nuevo pedido
              </div>
              <Input icon={clientIcon} placeholder="Nombre de cliente" />
              <div>
                <ProductOrder />
                <ProductOrder />
              </div>
              <div>
                <span>Total</span>
                <span>$30.00</span>
              </div>
              <button>Enviar Pedido</button>
            </form>
          </div>
        </section>
      </main>

      <Nav />
    </div>
  );
};
