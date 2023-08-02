export type TProductType = "Todos" | "Desayuno" | "Almuerzo";

export type TProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  type: TProductType;
  dateEntry: string;
};
