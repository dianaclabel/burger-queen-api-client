import { API_URL } from "../constants";

export const ProdutsService = {
  //consumiendo la API para obtener los productos
  getProducts(token: string, type: string) {
    const params = type === "Todos" ? "" : "type=" + type;

    return fetch(API_URL + "/products" + "?" + params, {
      method: "GET",
      headers: {
        authorization: "Bearer " + token,
      },
    });
  },

  createProduct() {
    console.log("createProduct");
  },
  getProduct() {
    console.log("getProduct");
  },
  updateProduct() {
    console.log("updateProduct");
  },
};
