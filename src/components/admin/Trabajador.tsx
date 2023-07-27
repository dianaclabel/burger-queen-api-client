type TrabajadorProps = {
  id: string,
  name: string,
  email: string,
  position: string
}

const trab1: TrabajadorProps = {
  id: "1",
  name: "Luis Garcia",
  email: "luis.garcia@burgerqueen.com",
  position: "waiter"
}

export const Trabajador = ({TrabajadorProps}) => {
  return (
    <>
        <section className='boxTrabajador'>
            <div className="containerTextTrab">
                <p className="nombreTrabajador">{trab1.name}</p>
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
