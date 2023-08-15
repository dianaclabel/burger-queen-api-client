import { CardOrder } from "./CardOrder";
import { TOrder } from "../../../types/order";
import { useContext, useEffect, useState } from "react";
import { OrdersService } from "../../../services/orders";
import { AuthContext } from "../../../context/auth";

export const OrdersPage = () => {
  const { user } = useContext(AuthContext);
  const status = "Preparado";
  const [orders, setOrders] = useState<TOrder[] | null>(null);

  useEffect(() => {
    let ignore = false;
    setOrders(null);
    OrdersService.getOrders({ status, userId: user?.id })
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
  }, [user]);

  return (
    <div className="flex flex-col items-center my-4">
      {orders?.map((order) => (
        <CardOrder key={order.id} order={order} />
      ))}
    </div>
  );
};
