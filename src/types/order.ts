import { TProduct } from "./product";

export type TNewOrderItem = {
  qty: number;
  product: TProduct;
};

export type TOrder = {
  id: number;
  userId: number;
  client: string;
  products: TNewOrderItem[];
  status: "Pendiente" | "Finalizado";
  dateEntry: string;
  dateProcessed: string;
};

export type TNewOrder = Omit<TOrder, "id" | "dateProcessed">;
