import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin"
import { MainAlmuerzos } from "./compBodyAdmin/MainAlmuerzos"
import { NavDesayunos } from "./compBodyAdmin/NavDesayunos"


export const AlmuerzosAdmin = () => {
  return (
    <>
        <div className="contenedor">
            <HeaderAdmin role= "Admin" userName="Federico"/>
            <MainAlmuerzos/>
            <NavDesayunos/>
        </div>
        
    </>
  )
}
