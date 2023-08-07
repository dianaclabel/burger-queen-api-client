import { Card } from "./Card";
import { FilterBtn } from "./FilterBtn";
import { Input } from "./Input";
import search from "../../../assets/icons/search.png";
import { useEffect, useState, useContext } from "react";
import { TProduct, TProductType } from "../../../types/product";
import { ProdutsService } from "../../../services/products";
import { AuthContext } from "../../../context/auth";
import { NewOrderColumn } from "./NewOrderColumn";

export const MenuPage = () => {
  const { token } = useContext(AuthContext);

  const [type, setType] = useState<TProductType>("Todos");
  const [products, setProducts] = useState<TProduct[] | null>(null);

  useEffect(() => {
    let ignore = false;
    setProducts(null);
    ProdutsService.getProducts(token, type)
      .then((response) => {
        //Me avisa si user navega a otra pagina o
        if (!ignore) {
          if (response.ok) {
            response.json().then((dataProducts) => {
              setProducts(dataProducts);
            });
          }
        }
      })
      .catch((error) => {
        console.log("No hay respuesta del servidor", error);
      });
    return () => {
      ignore = true;
    };
  }, [type, token]);

  return (
    <div className="flex justify-center gap-8 py-5 mx-auto max-w-screen-sm">
      <section className="md:w-1/2">
        <Input
          type="text"
          icon={search}
          placeholder="Buscador de producto"
        ></Input>
        <div className="flex justify-center gap-2 my-5">
          <FilterBtn
            onClick={() => {
              setType("Todos");
            }}
            nameFilter="Todos"
          ></FilterBtn>
          <FilterBtn
            onClick={() => {
              setType("Desayuno");
            }}
            nameFilter="Desayuno"
          ></FilterBtn>
          <FilterBtn
            onClick={() => {
              setType("Almuerzo");
            }}
            nameFilter="Almuerzo"
          ></FilterBtn>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {products?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="md:w-1/2">
        <NewOrderColumn />
      </section>
    </div>
  );
};
