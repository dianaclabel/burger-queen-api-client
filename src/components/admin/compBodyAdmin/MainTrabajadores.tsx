import { Trabajador } from "../Trabajador"


export const MainTrabajadores = () => {
  return (
    <>
        <main>
            <h2 className="titulo" >Listado de trabajadores</h2>
            <Trabajador/>
            <Trabajador/>
            <Trabajador/>
            <Trabajador/>      
        </main>
    </>
  )
}
