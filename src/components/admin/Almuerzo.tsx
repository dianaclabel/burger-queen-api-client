export type AlmuerzoProps = {
    id: string,
    name: string,
    price: number,
    image: string,
    type: string,
    dateEntry: string
}
 type AlmModalProps = {
    almuerzo: AlmuerzoProps,
    deleteProducts: (almuerzo:AlmuerzoProps) => void
    editProducts: (almuerzo:AlmuerzoProps) => void
 }

export const Almuerzo = ({ almuerzo, deleteProducts, editProducts}: AlmModalProps) => {
    return (
        <>
            <section className='boxTrabajador'>
                    <div className="containerTextTrab">
                        <p className="nombreTrabajador">{almuerzo.name}</p>
                        <div className="datosTrabajador">
                            <p>Precio: S/. {almuerzo.price}</p>
                        </div>
                    </div>
                    <div className="containerIconsTrab">
                        <img onClick={() => editProducts(almuerzo)} className="iconEdit" src="../src/assets/iconsAdmin/Edit.svg" />
                        <img onClick={() => deleteProducts(almuerzo)} className="iconDelete" src="../src/assets/iconsAdmin/Delete.svg" />
                    </div>
            </section>
        </>
      )
}
