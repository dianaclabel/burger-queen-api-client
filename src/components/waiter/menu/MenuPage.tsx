import { Header } from "../Header";
import { Nav } from "../Nav";
import { Card } from "./Card";
import { FilterBtn } from "./FilterBtn";

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
        <section className="w-2/4">
          <div>
            <input type="text" />
          </div>
        </section>
      </main>

      <Nav />
    </div>
  );
};
