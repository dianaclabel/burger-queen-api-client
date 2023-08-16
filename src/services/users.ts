import { API_URL } from "../constants";

export const UsersService = {
  getUser(userId: number) {
    const token = localStorage.getItem("Auth-token");
    return fetch(API_URL + "/users/" + userId, {
      method: "GET",
      headers: {
        authorization: "Bearer " + token,
      },
    });
  },
};
