
import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin"
import { DesayunoPropsArray, MainDesayunos } from './compBodyAdmin/MainDesayunos'
import { NavDesayunos } from "./compBodyAdmin/NavDesayunos"


const desayunos: DesayunoPropsArray = {items: [
  {id:"d001",name: "Café americano", price: "$5"},
  {id:"d002",name: "Café con leche", price: "$7"},
  {id:"d003",name: "Sandwich de jamón y queso", price: "$10"},
  {id:"d004",name: "Jugo de frutas natural", price: "$7"},
]}

export const Desayunos = () => {
  return (
   <>
    <div className='contenedor'>
      <HeaderAdmin role="Admin" userName="Federico"/>
      <MainDesayunos {...desayunos}/>
      <NavDesayunos/>
    </div>
   </>
  )
}
