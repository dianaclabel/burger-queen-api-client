export type ItemPedido = {
    id: string,
    quantity: number,
    description: string
}

export type PedidoProps = {
    waiter: string,
    client: string,
    time: string
    items: Array<ItemPedido>
}


export const PedidoAdmin = (pedido:PedidoProps) => {
    
    const listItems = pedido.items.map(products => 
        <div key={products.id} className="boxDatos">
        <p> {products.quantity} {products.description}</p>
        </div>)

  return (
    <>
        <section className='boxPedidoAdmin'>
            <div className="boxSuperiorPedido">
                <p>Pedido</p>
                <p>Detalle</p>
            </div>
            <div>
                <div className="boxPedido">
                    <div className="boxPedidoIzq">
                        <div className="boxDatos">
                            <img className="iconWaiter" src="src/assets/Waiter.png"/>
                            <p>{pedido.waiter}</p>
                        </div>
                        <div className="boxDatos">
                            <img className="iconUserClient" src="src/assets/UserClient.png"/>
                            <p>{pedido.client}</p>
                        </div>
                        <div className="boxDatos">
                            <img className="iconTimeMachine" src="src/assets/TimeMachine.png"/>
                            <p>{pedido.time}</p>
                        </div>
                    </div>
                    <div className="lineaPedidos">
                        <img className="iconLinea" src="src/assets/Vector1.png" />
                    </div>
                    <div className="boxPedidoDer">
                        {listItems}
                        <div className="boxButton">
                            <button className="button2" >Pendiente</button>
                        </div>
                    </div>
                    
                </div>

            </div>
        
        </section>
    </>
  )
}
