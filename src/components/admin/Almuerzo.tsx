export type AlmuerzoProps = {
    id: string,
    name: string,
    price: number,
    image: string,
    type: string,
    dateEntry: string
}


export const Almuerzo = (almuerzo:AlmuerzoProps) => {
    return (
        <>
            <section className='boxTrabajador'>
                    <div className="containerTextTrab">
                        <p className="nombreTrabajador">{almuerzo.name}</p>
                        <div className="datosTrabajador">
                            <p>Precio: $ {almuerzo.price}</p>
                        </div>
                    </div>
                    <div className="containerIconsTrab">
                        <img className="iconEdit" src="../src/assets/iconsAdmin/Edit.svg" />
                        <img className="iconDelete" src="../src/assets/iconsAdmin/Delete.svg" />
                    </div>
            </section>
        </>
      )
}