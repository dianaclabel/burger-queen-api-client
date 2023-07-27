

export const PedidoAdmin = () => {
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
                            <p>Luis Garcia</p>
                        </div>
                        <div className="boxDatos">
                            <img className="iconUserClient" src="src/assets/UserClient.png"/>
                            <p>Martin</p>
                        </div>
                        <div className="boxDatos">
                            <img className="iconTimeMachine" src="src/assets/TimeMachine.png"/>
                            <p>00:00:00</p>
                        </div>
                    </div>
                    <div className="lineaPedidos">
                        <img className="iconLinea" src="src/assets/Vector1.png" />
                    </div>
                    <div className="boxPedidoDer">
                        <div className="boxDatos">
                            <p>1</p> <p>Café Americano</p>
                        </div>
                        <div className="boxDatos">
                            <p>2</p> <p>Sandwich de jamón y queso</p>
                        </div>
                        <div className="boxDatos">
                            <p>2</p> <p>Jugo de frutas natural</p>
                        </div>
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
