
import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin"
import { MainDesayunos } from './compBodyAdmin/MainDesayunos'
import { NavDesayunos } from "./compBodyAdmin/NavDesayunos"



export const Desayunos = () => {
  return (
   <>
    <div className='contenedor'>
      <HeaderAdmin role="Admin" userName="Federico"/>
      <MainDesayunos/>
      <NavDesayunos/>

    </div>
   </>
  )
}
