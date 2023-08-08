import waiter from "../../../assets/icons/Waiter.svg";

export const OrdersPage = () => {
  return (
    <div className="bg-white border-2 border-[#372F2A] rounded-xl w-3/4 p-4 text-[#372F2A]">
      <div className="flex justify-between">
        <ul className="text-lg">
          <li className="flex pb-1">
            <p className="font-bold w-32"> N° de Pedido</p>
            <p>: 2</p>
          </li>
          <li className="flex pb-1">
            <p className="font-bold w-32">Cliente</p>
            <p>: Pedrito Bravo</p>
          </li>
          <li className="flex pb-1">
            <p className="font-bold w-32">Hora</p>
            <p>: 7:40 a. m.</p>
          </li>
          <li className="flex pb-1">
            <div className="w-32">
              <img src={waiter} alt="waiter" />
            </div>
            <p>: Luis Garcia</p>
          </li>
        </ul>
        <div>
          <div className="bg-yellow-300 rounded-xl py-2 px-6">
            <p className="font-bold">Preparado</p>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-[#372F2A] mt-1"></div>
      <div className="text-center">
        <div className="flex justify-between font-bold text-orange-400 py-4 px-3">
          <p className="text-lg">Descripción</p>
          <p className="text-lg">Cantidad</p>
        </div>
        <div>//Colocar las tarejtas de pedidos</div>
        <button className="bg-[#68A207] py-2 w-9/12 text-white font-bold rounded-lg text-xl">
          Entregar
        </button>
      </div>
    </div>
  );
};
