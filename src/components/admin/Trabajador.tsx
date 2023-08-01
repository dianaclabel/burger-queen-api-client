

export type TrabajadorProps = {
  email: string,
  pasword: string,
  role: string,
  id: string,
}

export const Trabajador = (trabajador: TrabajadorProps) => {
  
  return (
    <>
        <section className='boxTrabajador'>
            <div className="containerTextTrab">
                    <p>Email: {trabajador.email}</p>
                    <p>Role: {trabajador.role}</p>
            </div>
            <div className="containerIconsTrab">
                    <img className="iconEdit" src="../src/assets/iconsAdmin/Edit.svg" alt="Editar" />
                    <img className="iconDelete" src="../src/assets/iconsAdmin/Delete.svg" alt="Eliminar" />
            </div>
        </section>
    </>
  )
}
