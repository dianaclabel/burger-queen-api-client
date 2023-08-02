import { Card } from "./Card";
import { FilterBtn } from "./FilterBtn";
import { ProductOrder } from "./ProductOrder";
import { Input } from "./Input";
import clientIcon from "./../../../assets/icons/client.png";
import search from "../../../assets/icons/search.png";
import cafeOrder from "./../../../assets/cafe-americano-order.png";
import { useEffect, useState, useContext } from "react";
import { TProduct, TProductType } from "../../../types/product";
import { ProdutsService } from "../../../services/products";
import { AuthContext } from "../../../context/auth";

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
            <Card
              key={product.id}
              imgUrl={product.image}
              nameProduct={product.name}
              price={product.price}
            ></Card>
          ))}
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
              <span className="font-extrabold text-orange-400 ">$30.00</span>
            </div>
            <button className="bg-orange-400 w-3/4 p-2 my-4 rounded-xl text-white font-bold cursor-pointer ease-out duration-300 hover:bg-orange-500">
              Enviar Pedido
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
