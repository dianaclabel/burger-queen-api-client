import { Trabajador, TrabajadorProps } from "../Trabajador"

export type ListTrabajadoresProp = {
  trabajadores: TrabajadorProps[]
  onOpenDelete: (trabajador: TrabajadorProps) => void 
  onOpenEdit: (trabajador: TrabajadorProps) => void 
}

export const MainTrabajadores = ({trabajadores, onOpenDelete,onOpenEdit}: ListTrabajadoresProp ) => {

  const listTrab = trabajadores.map(trab =>
    <Trabajador trabajador={trab} onDeleteUser={onOpenDelete} onEditUser={onOpenEdit} key={trab.id}/>
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
