

import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin"
import { MainTrabajadores, TrabajadorPropsArray } from "./compBodyAdmin/MainTrabajadores"
import { NavTrabajadores } from "./compBodyAdmin/NavTrabajadores"

const trabajadores: TrabajadorPropsArray = { itemsTrab: [
  {email: "luis.garcia@burgerqueen.com", pasword:" ", role: "mesero", id: "1"},
  {email: "carmen.obregon@burgerqueen.com", pasword:" ", role: "mesero",id: "2"},
  {email: "danilo.vargas@burgerqueen.com", pasword:" ", role: "Jefe de cocina",id: "3"},
]

}

export const Trabajadores = () => {
  return (
    <>
        <div className='contenedor'>
            <HeaderAdmin role="Admin" userName="Federico"/>
            <MainTrabajadores {...trabajadores}/>
            <NavTrabajadores/>
        </div>
    </>
  )
}
