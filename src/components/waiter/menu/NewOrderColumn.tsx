import { useContext } from "react";
import { Input } from "./Input";
import { ProductOrder } from "./ProductOrder";
import clientIcon from "./../../../assets/icons/client.png";
import { NewOrderContext } from "../../../context/newOrder";

export const NewOrderColumn = () => {
  const { items, createOrder, client, setClient, total } =
    useContext(NewOrderContext);

  const handleSendOrder = () => {
    createOrder()
      .then((response) => {
        if (response.ok) {
          alert("Pedido creado exitosamente");
        } else {
          alert("No se pudo crear su pedido");
        }
      })
      .catch(() => {
        //en caso de que no llegue al servidor
        alert("No se pudo establecer conexión con el servidor");
      });
  };

  return (
    <div className="border border-orange-400 rounded-lg w-full">
      <div className="text-center">
        <div className="bg-orange-400 py-3 text-white font-inter font-bold text-lg rounded-t-lg text-center ">
          Nuevo pedido
        </div>
        <div className="p-3">
          <Input
            value={client}
            onChange={(event) => setClient(event.target.value)}
            icon={clientIcon}
            placeholder="Nombre de cliente *"
          />
        </div>
        <div className="mx-3">
          {items.map((item) => (
            <ProductOrder key={item.product.id} item={item} />
          ))}
        </div>
        <div className="flex justify-between mx-3 py-4">
          <span className="font-bold text-orange-400">Total</span>
          <span className="font-extrabold text-orange-400 ">S/.{total}</span>
        </div>

        <button
          onClick={handleSendOrder}
          disabled={items.length === 0 || client === ""}
          className="bg-orange-400 w-3/4 p-2 my-4 rounded-xl text-white font-bold cursor-pointer ease-out duration-300 hover:bg-orange-500 disabled:bg-gray-200 disabled:text-gray-400"
        >
          Enviar Pedido
        </button>
      </div>
    </div>
  );
};
