
import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin"
import { DesayunoPropsArray, MainDesayunos } from './compBodyAdmin/MainDesayunos'
import { NavDesayunos } from "./compBodyAdmin/NavDesayunos"


const desayunos: DesayunoPropsArray = {items: [
  {id:"1",name: "Café americano", price: 500, image:"", type: "desayuno", dateEntry: "2022-03-05 15:14:10"},
  {id:"2",name: "Café con leche", price: 700, image:"", type: "desayuno", dateEntry: "2022-03-05 15:14:10"},
  {id:"3",name: "Sandwich de jamón y queso", price: 1000, image:"", type: "desayuno", dateEntry: "2022-03-05 15:14:10"},
  {id:"4",name: "Jugo de frutas natural", price: 700, image:"", type: "desayuno", dateEntry: "2022-03-05 15:14:10"},
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
