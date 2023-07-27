import { Desayuno, DesayunoProps } from "../Desayuno"

export type DesayunoPropsArray ={
    items: Array<DesayunoProps>
}

export const MainDesayunos = (desayunos: DesayunoPropsArray) => {
    const listDesayunos = desayunos.items.map(des =>
        <Desayuno {...des} key={des.id} />
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
