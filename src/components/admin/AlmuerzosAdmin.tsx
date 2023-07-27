import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin"
import { AlmuerzoPropsArray, MainAlmuerzos } from "./compBodyAdmin/MainAlmuerzos"
import { NavDesayunos } from "./compBodyAdmin/NavDesayunos"

const almuerzos: AlmuerzoPropsArray = {items: [
  {id:"a001", name: "Hamburguesa simple", price: "$10"},
  {id:"a002", name: "Hamburguesa doble", price: "$15"},
  {id:"a003", name: "Papas fritas", price: "$5"},
  {id:"a004", name: "Agua 500ml", price: "$5"},
  {id:"a005", name: "Agua 750ml", price: "$7"},
  {id:"a006", name: "Bebida/gaseosa 500ml", price: "$7"},
  {id:"a007", name: "Bebida/gaseosa 750ml", price: "$10"},

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
