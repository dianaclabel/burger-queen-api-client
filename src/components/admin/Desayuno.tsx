
export type DesayunoProps = {
    id: string,
    name: string,
    price: number,
    image: string,
    type: string,
    dateEntry: string
}

type DesModalProps = {
    desayuno: DesayunoProps,
    deleteProduct: (desayuno:DesayunoProps) => void
    editProduct: (desayuno:DesayunoProps) => void
 }

export const Desayuno = ({desayuno, deleteProduct, editProduct}: DesModalProps) => {
    return (
        <>
            <section className='boxTrabajador'>
                    <div className="containerTextTrab">
                        <p className="nombreTrabajador">{desayuno.name}</p>
                        <div className="datosTrabajador">
                            <p>Precio: S/. {desayuno.price}</p>
                        </div>
                    </div>
                    <div className="containerIconsTrab">
                        <img onClick={() => editProduct(desayuno)} className="iconEdit" src="../src/assets/iconsAdmin/Edit.svg" />
                        <img onClick={() => deleteProduct(desayuno)} className="iconDelete" src="../src/assets/iconsAdmin/Delete.svg" />
                    </div>
            </section>
        </>
      )
}
