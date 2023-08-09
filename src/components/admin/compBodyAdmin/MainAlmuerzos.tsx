
import { Almuerzo, AlmuerzoProps } from "../Almuerzo"

 export type ListAlmuerzosProps = {
    almuerzos : AlmuerzoProps[],
    onOpenDelete: (almuerzo: AlmuerzoProps) => void 
    onOpenEdit: (almuerzo: AlmuerzoProps) => void 
 }


export const MainAlmuerzos = ({almuerzos, onOpenDelete, onOpenEdit}: ListAlmuerzosProps) => {

    const itemsAlmuerzos = almuerzos.map(alm =>
        <Almuerzo almuerzo={alm} deleteProducts={onOpenDelete} editProducts={onOpenEdit} key={alm.id}/>
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
