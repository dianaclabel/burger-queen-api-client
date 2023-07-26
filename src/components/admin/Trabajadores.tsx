
import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin"
import { MainTrabajadores } from "./compBodyAdmin/MainTrabajadores"
import { NavTrabajadores } from "./compBodyAdmin/NavTrabajadores"


export const Trabajadores = () => {
  return (
    <>
        <div className='contenedor'>
            <HeaderAdmin role="Admin" userName="Federico"/>
            <MainTrabajadores/>
            <NavTrabajadores/>
        </div>
    </>
  )
}
