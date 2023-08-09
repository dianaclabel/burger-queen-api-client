
import { Desayuno, DesayunoProps } from "../Desayuno"

export type ListDesayunosProps = {
    desayunos: DesayunoProps[],
    onOpenDelete: (desayuno: DesayunoProps) => void 
    onOpenEdit: (desayuno: DesayunoProps) => void 
} 


export const MainDesayunos = ({desayunos, onOpenDelete, onOpenEdit}:ListDesayunosProps ) => {

    const listDesayunos = desayunos.map(des =>
        <Desayuno desayuno={des} deleteProduct={onOpenDelete} editProduct={onOpenEdit} key={des.id} />
    )
    return (
        <>
            <main>
                <h2 className="titulo" >Desayunos</h2>
                {listDesayunos}
            </main>
        </>
    )
}
