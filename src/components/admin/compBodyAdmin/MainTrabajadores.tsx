import { Trabajador, TrabajadorProps } from "../Trabajador"

export type TrabajadorPropsArray = {
  itemsTrab: TrabajadorProps[]
}


export const MainTrabajadores = (trabajadores:TrabajadorPropsArray) => {
  const listTrab = trabajadores.itemsTrab.map(trab =>
    <Trabajador {...trab} key={trab.id}/>
    )
  return (
    <>
        <main>
            <h2 className="titulo" >Listado de trabajadores</h2>
            {listTrab}     
        </main>
    </>
  )
}
