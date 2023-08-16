import waiterIcon from "../../assets/icons/Waiter.svg";
import { differenceInMinutes, format } from "date-fns";
import { TOrder } from "../../types/order";
import { CardOrderKitchenItem } from "./CardOrderKitchenItem";
import { TUser } from "../../types/user";
import { useState, useEffect } from "react";
import { UsersService } from "../../services/users";
import { OrdersService } from "../../services/orders";
import { toast } from "react-hot-toast";

export const CardOrderKitchen = ({
  order,
  refresh,
}: {
  order: TOrder;
  refresh: () => void;
}) => {
  const [waiter, setWaiter] = useState<TUser | null>(null);

  useEffect(() => {
    let ignore = false;
    setWaiter(null);
    UsersService.getUser(order.userId)
      .then((response) => {
        if (!ignore) {
          if (response.ok) {
            response.json().then((dataWaiter) => {
              setWaiter(dataWaiter);
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
  }, [order]);

  const handlePrepareOrder = () => {
    OrdersService.prepareOrder(order.id).then((response) => {
      if (response.ok) {
        refresh();
        toast.success("El pedido fue preparado");
      } else {
        toast.error("Ocurrio un error");
      }
    });
  };

  return (
    <div className="bg-white border-t-[1px] border-[#695040] rounded-xl w-3/4 p-4 text-[#372F2A] my-4 shadow-lg shadow-[#564337]">
      <div className="flex justify-between px-3">
        <ul className="text-lg">
          <li className="flex pb-1">
            <p className="font-bold w-32"> N° de Pedido</p>
            <p>: {order.id}</p>
          </li>
          <li className="flex pb-1">
            <p className="font-bold w-32">Cliente</p>
            <p>: {order.client}</p>
          </li>
          <li className="flex pb-1">
            <p className="font-bold w-32">Hora</p>
            <p>: {format(new Date(order.dateEntry), "hh: mm aaaa ")}</p>
          </li>
          <li className="flex pb-1">
            <div className="w-32">
              <img src={waiterIcon} alt="waiter" />
            </div>
            <p>: {waiter?.name}</p>
          </li>
        </ul>
        <div>
          <div className="bg-yellow-300 rounded-xl py-2 px-6">
            <p className="font-bold">{order.status}</p>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[#372F2A] mt-1"></div>
      <div className="text-center">
        <div className="flex justify-between font-bold text-orange-400 py-4 px-3">
          <p className="text-lg">Descripción</p>
          <p className="text-lg">Cantidad</p>
        </div>
        <div>
          {order.products.map((item) => (
            <CardOrderKitchenItem
              key={item.product.id}
              item={item}
            ></CardOrderKitchenItem>
          ))}
        </div>
        {order.status === "Pendiente" && (
          <button
            onClick={handlePrepareOrder}
            className="bg-[#68A207] py-2 w-9/12 text-white font-bold rounded-lg text-xl mt-3"
          >
            Preparado
          </button>
        )}

        {order.status === "Preparado" && (
          <span>
            Se preparó en{" "}
            {differenceInMinutes(
              new Date(order.dateProcessed),
              new Date(order.dateEntry)
            )}{" "}
            minutos
          </span>
        )}
      </div>
    </div>
  );
};
