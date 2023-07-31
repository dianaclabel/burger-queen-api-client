export type ItemProducts = {
    qty: number,
    product: {
        id: number,
        name: string,
        price: number,
        image: string,
        type: string,
        dateEntry: string,
    }
}

export type PedidoProps = {
    client: string,
    products: Array<ItemProducts>,
    status: string,
    dataEntry: string,
}


export const PedidoAdmin = (pedido:PedidoProps) => {
    
    const listItems = pedido.products.map(prod => 
        <div key={prod.product.id} className="boxDatos">
        <p> {prod.qty} {prod.product.name}</p>
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
                            <img className="iconUserClient" src="src/assets/UserClient.png"/>
                            <p>{pedido.client}</p>
                        </div>
                        <div className="boxDatos">
                            <img className="iconTimeMachine" src="src/assets/TimeMachine.png"/>
                            <p>{pedido.dataEntry}</p>
                        </div>
                    </div>
                    <div className="lineaPedidos">
                        <img className="iconLinea" src="src/assets/Vector1.png" />
                    </div>
                    <div className="boxPedidoDer">
                        {listItems}
                        <div className="boxButton">
                            <div className="button2">{pedido.status}</div>
                        </div>
                    </div>
                    
                </div>

            </div>
        
        </section>
    </>
  )
}
