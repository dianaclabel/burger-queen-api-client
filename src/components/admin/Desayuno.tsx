


/*     {nombre: 'Café Americano', precio: '$5'},
    {nombre: 'Café con leche', precio: '$7'},
    {nombre: 'Sandwich de jamón y queso', precio: '$10'},
    {nombre: 'Jugo de frutas natural', precio: '$7'}, */

export const Desayuno = () => {
    return (
        <>
            <section className='boxTrabajador'>
                    <div className="containerTextTrab">
                        <p className="nombreTrabajador">1. Café Americano</p>
                        <div className="datosTrabajador">
                            <p>Precio: $5</p>
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
