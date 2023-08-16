import { useEffect, useState } from "react";
import { OrdersService } from "../../services/orders";
import { CardOrderKitchen } from "./CardOrderKitchen";
import { TOrder } from "../../types/order";

export const KitchenPage = () => {
  const [loadedDate, setLoadedDate] = useState(new Date());
  const [orders, setOrders] = useState<TOrder[] | null>(null);

  const refresh = () => setLoadedDate(new Date());

  useEffect(() => {
    let ignore = false;
    OrdersService.getOrders({ status: ["Pendiente", "Preparado"] })
      .then((response) => {
        if (!ignore) {
          if (response.ok) {
            response.json().then((dataOrders: TOrder[]) => {
              const pendingOrders = dataOrders.filter(
                (o) => o.status === "Pendiente"
              );
              const preparedOrders = dataOrders
                .filter((o) => o.status === "Preparado")
                .reverse();

              setOrders([...pendingOrders, ...preparedOrders]);
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
  }, [loadedDate]);

  return (
    <div className="flex flex-col items-center my-4">
      {orders?.map((order) => (
        <CardOrderKitchen key={order.id} order={order} refresh={refresh} />
      ))}
    </div>
  );
};
