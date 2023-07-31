import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin"
import { AlmuerzoPropsArray, MainAlmuerzos } from "./compBodyAdmin/MainAlmuerzos"
import { NavDesayunos } from "./compBodyAdmin/NavDesayunos"

const almuerzos: AlmuerzoPropsArray = {items: [
  {id:"1", name: "Hamburguesa simple", price: 1000, image:"", type: "desayuno", dateEntry: "2022-03-05 15:14:10"},
  {id:"2", name: "Hamburguesa doble", price: 1500, image:"", type: "desayuno", dateEntry: "2022-03-05 15:14:10"},
  {id:"3", name: "Papas fritas", price: 500, image:"", type: "desayuno", dateEntry: "2022-03-05 15:14:10"},
  {id:"4", name: "Agua 500ml", price: 500, image:"", type: "desayuno", dateEntry: "2022-03-05 15:14:10"},
  {id:"5", name: "Agua 750ml", price: 700, image:"", type: "desayuno", dateEntry: "2022-03-05 15:14:10"},
  {id:"6", name: "Bebida/gaseosa 500ml", price: 700, image:"", type: "desayuno", dateEntry: "2022-03-05 15:14:10"},
  {id:"7", name: "Bebida/gaseosa 750ml", price: 1000, image:"", type: "desayuno", dateEntry: "2022-03-05 15:14:10"},

]}

export const AlmuerzosAdmin = () => {
  return (
    <>
        <div className="contenedor">
            <HeaderAdmin role= "Admin" userName="Federico"/>
            <MainAlmuerzos {...almuerzos}/>
            <NavDesayunos/>
        </div>
        
    </>
  )
}
