
export type DesayunoProps = {
    id: string,
    name: string,
    price: number,
    image: string,
    type: string,
    dateEntry: string
}

export const Desayuno = (desayuno: DesayunoProps) => {
    return (
        <>
            <section className='boxTrabajador'>
                    <div className="containerTextTrab">
                        <p className="nombreTrabajador">{desayuno.name}</p>
                        <div className="datosTrabajador">
                            <p>Precio: $ {desayuno.price}</p>
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
