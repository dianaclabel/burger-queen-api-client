import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin"
import { MainPedidosAdmin } from "./compBodyAdmin/MainPedidosAdmin"
import { NavPedidosAdmin } from "./compBodyAdmin/NavPedidosAdmin"


export const PedidosAdmin = () => {
  return (
    <>
        <div className='contenedor'>
            <HeaderAdmin role="Admin" userName="Federico"/>
            <MainPedidosAdmin/>
            <NavPedidosAdmin/>

        </div>
       
    </>
  )
}
