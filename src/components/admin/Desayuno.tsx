
export type DesayunoProps = {
    id: string,
    name: string,
    price: string
}

export const Desayuno = (desayuno: DesayunoProps) => {
    return (
        <>
            <section className='boxTrabajador'>
                    <div className="containerTextTrab">
                        <p className="nombreTrabajador">{desayuno.name}</p>
                        <div className="datosTrabajador">
                            <p>Precio: {desayuno.price}</p>
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
