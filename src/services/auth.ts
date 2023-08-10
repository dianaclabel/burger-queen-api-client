import { API_URL } from "../constants";

export const AuthService = {
  login(email: string, password: string) {
    //consumiendo la API
    return fetch(API_URL + "/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      //M. convierte a tipo Json
      body: JSON.stringify({ email, password }),
    });
  },
};
