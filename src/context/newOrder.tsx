import { useState, createContext, useContext } from "react";
import { TProduct } from "../types/product";
import { TOrderItem } from "../types/order";
import { OrdersService } from "../services/orders";
import { AuthContext } from "./auth";

type TNewOrderContextValue = {
  client: string;
  setClient: React.Dispatch<React.SetStateAction<string>>;
  items: TOrderItem[];
  increment: (product: TProduct) => void;
  decrement: (product: TProduct) => void;
  addItem: (product: TProduct) => void;
  removeItem: (product: TProduct) => void;
  total: number;
  createOrder: () => Promise<Response>;
};

export const NewOrderContext = createContext({} as TNewOrderContextValue);

// Provider

type ProviderProps = {
  children: React.ReactNode;
};

export const NewOrderContextProvider = ({ children }: ProviderProps) => {
  const { user } = useContext(AuthContext);
  // Estados
  const [client, setClient] = useState("");
  const [items, setItems] = useState<TOrderItem[]>([]);

  // Obtener el precio total del pedido, sumando el producto * cantidad de todos los items
  const total = items.reduce(
    (accumulator, item) => accumulator + item.product.price * item.qty,
    0
  );

  const increment = (product: TProduct) => {
    const clonedItems = structuredClone(items);

    // Se busca un item cuyo producto tenga el mismo id
    // que el producto que recibimos por parámetro
    const existingClonedItem = clonedItems.find(
      (clonedItem) => clonedItem.product.id === product.id
    )!;

    existingClonedItem.qty++;

    setItems(clonedItems);
  };

  const decrement = (product: TProduct) => {
    const clonedItems = structuredClone(items);

    // Se busca un item cuyo producto tenga el mismo id
    // que el producto que recibimos por parámetro
    const existingClonedItem = clonedItems.find(
      (clonedItem) => clonedItem.product.id === product.id
    )!;

    if (existingClonedItem.qty > 1) {
      existingClonedItem.qty--;
    }

    setItems(clonedItems);
  };

  const addItem = (product: TProduct) => {
    const existingItem = items.find((item) => item.product.id === product.id);

    if (existingItem) {
      increment(existingItem.product);
    } else {
      const newItem = {
        qty: 1,
        product: product,
      };
      setItems([...items, newItem]);
    }
  };

  const removeItem = (product: TProduct) => {
    // Se creo un array excluyendo el item cuyo id de producto
    // sea igual al id del producto recibido por parámetros
    const filteredItems = items.filter((item) => {
      if (item.product.id === product.id) return false;
      return true;
    });

    setItems(filteredItems);
  };

  const createOrder = async () => {
    const response = await OrdersService.createOrder({
      userId: user!.id,
      client: client,
      products: items,
      status: "Pendiente",
      dateEntry: new Date().toISOString(),
    });

    if (response.ok) {
      setClient("");
      setItems([]);
    }

    return response;
  };

  // Datos expuestos por el contexto de nuevo pedido
  const value = {
    client,
    setClient,
    items,
    increment,
    decrement,
    addItem,
    removeItem,
    total,
    createOrder,
  };

  return (
    //Se esta utilizando el contexto creado, Provider Es un componente que proporciona los datos que desea compartir con sus componentes hijos.
    <NewOrderContext.Provider value={value}>
      {children}
    </NewOrderContext.Provider>
  );
};
