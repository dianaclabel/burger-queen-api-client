export type TrabajadorProps = {
  item: string,
  id: string,
  name: string,
  email: string,
  position: string
}

export const Trabajador = (trabajador: TrabajadorProps) => {
  return (
    <>
        <section className='boxTrabajador'>
            <div className="containerTextTrab">
                <p className="nombreTrabajador">{trabajador.item} {trabajador.name}</p>
                <div className="datosTrabajador">
                    <p>Correo: {trabajador.email}</p>
                    <p>Cargo: {trabajador.position}</p>
                </div>
            </div>
            <div className="containerIconsTrab">
                    <img className="iconEdit" src="src/assets/Edit.png" />
                    <img className="iconDelete" src="src/assets/Delete.png" />
            </div>
        </section>
    </>
  )
}
