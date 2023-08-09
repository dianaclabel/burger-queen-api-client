import { API_URL } from "../constants";
import { TNewOrder } from "../types/order";

type TGetOrderProps = {
  status?: string;
  userId?: number;
};

export const OrdersService = {
  //consumiendo la API para obtener los pedidos
  getOrders({ status, userId }: TGetOrderProps = {}) {
    const token = localStorage.getItem("Auth-token");

    //Se crea los parametros para la URL
    const params = new URLSearchParams();

    if (typeof status === "string") {
      params.set("status", status);
    }

    if (typeof userId === "number") {
      //como userId es de tipo numero con "" lo convierto a string
      params.set("userId", userId + "");
    }

    // Params.tostring -> nos devuelve los parametros hechos en string
    return fetch(API_URL + "/orders" + "?" + params.toString(), {
      method: "GET",
      headers: {
        authorization: "Bearer " + token,
      },
    });
  },

  createOrder(newOrder: TNewOrder) {
    const token = localStorage.getItem("Auth-token");

    return fetch(API_URL + "/orders", {
      method: "POST",
      headers: {
        authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });
  },
};
