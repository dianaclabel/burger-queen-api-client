import { PedidoAdmin, PedidoProps } from "../PedidoAdmin"

const pedido1: PedidoProps ={
  waiter: "Luis Garcia",
  client: "Martin",
  time: "00:00:00",
  items: [
    {id: "p1", quantity: 1, description:"Café americano"},
    {id: "p2", quantity: 2, description:"Sandwich de jamón y queso"},
    {id: "p3", quantity: 2, description:"Jugo de frutas natural"}
  ]
}


export const MainPedidosAdmin = () => {
  return (
    <>
        <main>
            <h2 className="titulo" >Pedidos</h2>
            <PedidoAdmin {...pedido1}/>

        </main>
    </>
  )
}
