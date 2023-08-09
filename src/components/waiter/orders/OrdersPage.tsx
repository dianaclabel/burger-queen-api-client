import { NewOrderReady } from "./NewOrderReady";

export const OrdersPage = () => {
  return (
    <div className="flex flex-col items-center my-4">
      <NewOrderReady />
      <NewOrderReady />
      <NewOrderReady />
    </div>
  );
};
