import { useContext } from "react"
import { AuthContext } from "../../context/auth"
import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin"
import { MainPedidosAdmin } from "./compBodyAdmin/MainPedidosAdmin"
import { NavPedidosAdmin } from "./compBodyAdmin/NavPedidosAdmin"



export const PedidosAdmin = () => {
  const { user } = useContext(AuthContext);

  
  return (
    <>
      <div className='contenedor'>
        <HeaderAdmin role={user!.role} userName={user!.name} />
        <MainPedidosAdmin />
        <NavPedidosAdmin />

      </div>

    </>
  )
}
