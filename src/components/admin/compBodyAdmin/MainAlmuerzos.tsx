import { Almuerzo, AlmuerzoProps } from "../Almuerzo"

export type AlmuerzoPropsArray = {
    items: Array<AlmuerzoProps>
}


export const MainAlmuerzos = (almuerzos: AlmuerzoPropsArray) => {
    const itemsAlmuerzos = almuerzos.items.map(alm =>
        <Almuerzo {...alm} key={alm.id}/>
        )
    return (
        <>
            <main>
                <h2 className="titulo" >Almuerzo y cena</h2>
                {itemsAlmuerzos}
               
            </main>
        </>
      )
}
