import { DesayunoProps } from "./Desayuno"


type ModaDeleteDesayunosProps = {
    desayuno: DesayunoProps | null,
    onCloseDelete : () => void,
    deleteProduct: (id:string) => void,
}
export const ModalDeleteDes = ({desayuno, onCloseDelete, deleteProduct}: ModaDeleteDesayunosProps) => {
    return (
        <>
            <article className="modal is-open">
                <div className="modal-container">
                    <button onClick={onCloseDelete} className="modal-close">X</button>
                    <div className="boxInputsModal">
                        <h3 className="titulo">Deseas eliminar almuerzo{desayuno?.id}</h3>
                        <button onClick={() => desayuno && deleteProduct(desayuno?.id)} className="buttonModal">Eliminar</button>
                        <button onClick={onCloseDelete} className="buttonModal" typeof="text" >Cancelar</button>
                    </div>

                </div>
            </article>
        </>
    )
}