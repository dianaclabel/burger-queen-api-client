import { PedidoAdmin, PedidoProps } from "../PedidoAdmin"


 export type PedidoPropsArray = {
   itemPedido: Array<PedidoProps>
 }


export const MainPedidosAdmin = (pedidos: PedidoPropsArray) => {
  const listPedidos = pedidos.itemPedido.map(p => 
    <PedidoAdmin {...p} key={p.client}/>
    )
  return (
    <>
        <main>
            <h2 className="titulo" >Pedidos</h2>
            {listPedidos}
        </main>
    </>
  )
}
