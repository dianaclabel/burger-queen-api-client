import { CardOrder } from "./CardOrder";
import { TOrder } from "../../../types/order";
import { useContext, useEffect, useState } from "react";
import { OrdersService } from "../../../services/orders";
import { AuthContext } from "../../../context/auth";

export const OrdersPage = () => {
  const [loadedDate, setLoadedDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const refresh = () => setLoadedDate(new Date());

  const [orders, setOrders] = useState<TOrder[] | null>(null);

  useEffect(() => {
    let ignore = false;
    OrdersService.getOrders({ status: "Preparado", userId: user?.id })
      .then((response) => {
        if (!ignore) {
          if (response.ok) {
            response.json().then((dataOrders) => {
              setOrders(dataOrders);
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
  }, [user, loadedDate]);

  return (
    <div className="flex flex-col items-center my-4">
      {orders?.map((order) => (
        <CardOrder key={order.id} order={order} refresh={refresh} />
      ))}
    </div>
  );
};
