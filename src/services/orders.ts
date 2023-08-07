import { API_URL } from "../constants";
import { TNewOrder } from "../types/order";

export const OrdersService = {
  //consumiendo la API para obtener los pedidos
  getOrders() {
    const token = localStorage.getItem("Auth-token");

    return fetch(API_URL + "/orders", {
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
