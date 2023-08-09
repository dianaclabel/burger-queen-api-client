import { TrabajadorProps } from "./Trabajador"

type ModaDeleteTrabProps = {
    trabajador: TrabajadorProps | null,
    onCloseDelete : () => void,
    onDeleteUser: (id:string) => void,
}


export const ModalDeleteTrab = ({trabajador, onCloseDelete, onDeleteUser}: ModaDeleteTrabProps) => {
    return (
        <>
          <article className="modal is-open">
            <div className="modal-container">
              <button onClick={onCloseDelete} className="modal-close">X</button>
              <div className="boxInputsModal">
              <h3 className="titulo">Deseas eliminar trabajador {trabajador?.id}</h3>
                <button onClick={() => trabajador && onDeleteUser(trabajador?.id)} className="buttonModal">Eliminar</button>
                <button onClick={onCloseDelete} className="buttonModal" typeof="text" >Cancelar</button>
              </div>
    
            </div>
          </article>
        </>
      )
}
