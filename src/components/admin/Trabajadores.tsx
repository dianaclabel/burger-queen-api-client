

import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin"
import { MainTrabajadores, TrabajadorPropsArray } from "./compBodyAdmin/MainTrabajadores"
import { NavTrabajadores } from "./compBodyAdmin/NavTrabajadores"

const trabajadores: TrabajadorPropsArray = { itemsTrab: [
  {item: "1." ,id: "t001", name: "Luis Garcia", email: "luis.garcia@burgerqueen.com", position: "mesero"},
  {item: "2." ,id: "t002", name: "Carmen Obregon", email: "carmen.obregon@burgerqueen.com", position: "mesero"},
  {item: "3." ,id: "t003", name: "Danilo Vargas", email: "danilo.vargas@burgerqueen.com", position: "Jefe de cocina"},
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
