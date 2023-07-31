import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin"
import { MainPedidosAdmin, PedidoPropsArray } from "./compBodyAdmin/MainPedidosAdmin"
import { NavPedidosAdmin } from "./compBodyAdmin/NavPedidosAdmin"

const pedidos: PedidoPropsArray = {
  itemPedido: [
    {
      client: "Harry Potter",
      products: [
        {
          qty: 1,
          product: {
            id: 1,
            name: "Sandwich de jamón y queso",
            price: 1000,
            image: "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
            type: "Desayuno",
            dateEntry: "2022-03-05 15:14:10"
          }
        },
        {
          qty: 1,
          product: {
            id: 2,
            name: "Café Americano",
            price: 1000,
            image: "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg",
            type: "Desayuno",
            dateEntry: "2022-03-05 15:14:10"
          }
        }
      ],
      status: "pending",
      dataEntry: "2022-03-05 15:14:10"
    }]
}
export const PedidosAdmin = () => {
  return (
    <>
      <div className='contenedor'>
        <HeaderAdmin role="Admin" userName="Federico" />
        <MainPedidosAdmin {...pedidos} />
        <NavPedidosAdmin />

      </div>

    </>
  )
}
