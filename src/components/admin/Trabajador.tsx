

export type TrabajadorProps = {
  email: string,
  password: string,
  role: string,
  name: string,
  id: string,
}

type TrabDeleteProps = {
  trabajador : TrabajadorProps,
  onDeleteUser : (trabajador: TrabajadorProps) => void
  onEditUser : (trabajador: TrabajadorProps) => void
} 

export const Trabajador = ({trabajador,onDeleteUser, onEditUser}:TrabDeleteProps) => {
  

  return (
    <>
        <section className='boxTrabajador'>
            <div className="containerTextTrab">
                    <p>Name: {trabajador.name}</p>
                    <p>Email: {trabajador.email}</p>
                    <p>Role: {trabajador.role}</p>
            </div>
            <div className="containerIconsTrab">
                    <img onClick={() => onEditUser(trabajador)} className="iconEdit" src="../src/assets/iconsAdmin/Edit.svg" alt="Editar" />
                    <img onClick={() => onDeleteUser(trabajador)} className="iconDelete" src="../src/assets/iconsAdmin/Delete.svg" alt="Eliminar"/>
            </div>
        </section>
    </>
  )
}



