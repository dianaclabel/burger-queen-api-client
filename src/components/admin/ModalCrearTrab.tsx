import { TrabajadorProps } from "./Trabajador"

export type ModalCrearTrabProps = {
  trabajador: TrabajadorProps | null,
  onClose: () => void,
  onCreateUser: (username:String, email:String, password:String, role:String) => void
  onEditUser: (username:String, email:String, password:String, role:String, id:string) => void
}

export const ModalCrearTrab = ({ trabajador, onClose, onCreateUser,onEditUser }: ModalCrearTrabProps) => {
  
  return (
    <>
      <article className="modal is-open">
        <div className="modal-container">
          <button onClick={onClose} className="modal-close">X</button>
          <h3 className="titulo">{trabajador == null? "Añadir trabajador" : "Editar trabajador"}</h3>

          <form onSubmit={(e) =>{
            e.preventDefault()
              const formData = new FormData(e.target as HTMLFormElement);
              const email = formData.get("emailT") as string;
              const password = formData.get("passwordT") as string;
              const role= formData.get("roleT") as string;
              const username = formData.get("nameT") as string;

            if (trabajador == null){
              onCreateUser(username, email, password, role)
            }else{
              onEditUser(username, email, password, role, trabajador.id)
            }
          }} className="boxInputsModal">
            <input className="inputModal" name="nameT" type="text" defaultValue={trabajador?.name} placeholder="Name" required/>
            <input className="inputModal" name="emailT" type="text" defaultValue={trabajador?.email} placeholder="Email" required/>
            <input className="inputModal" name="roleT" type="text" defaultValue={trabajador?.role} placeholder="Role" required/>
            <input className="inputModal" name="passwordT" type="text" placeholder="Password" required/>

            <button className="buttonModal" type="submit">{trabajador == null? "Agregar" : "Editar" }</button>

          </form>

        </div>
      </article>
    </>
  )
}
