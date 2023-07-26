

export const Trabajador = () => {
  return (
    <>
        <section className='boxTrabajador'>
            <div className="containerTextTrab">
                <p className="nombreTrabajador">1. Luis Garcia</p>
                <div className="datosTrabajador">
                    <p>Correo: luis.garcia@burgerqueen.com</p>
                    <p>Cargo: mesero</p>
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
