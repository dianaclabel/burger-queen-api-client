import { AlmuerzoProps } from "./Almuerzo"

type ModaDeleteProdProps = {
    almuerzo: AlmuerzoProps | null,
    onCloseDelete : () => void,
    deleteProduct: (id:string) => void,
}
export const ModalDeleteProd = ({almuerzo, onCloseDelete, deleteProduct}: ModaDeleteProdProps) => {
    return (
        <>
            <article className="modal is-open">
                <div className="modal-container">
                    <button onClick={onCloseDelete} className="modal-close">X</button>
                    <div className="boxInputsModal">
                        <h3 className="titulo">Deseas eliminar almuerzo{almuerzo?.id}</h3>
                        <button onClick={() => almuerzo && deleteProduct(almuerzo?.id)} className="buttonModal">Eliminar</button>
                        <button onClick={onCloseDelete} className="buttonModal" typeof="text" >Cancelar</button>
                    </div>

                </div>
            </article>
        </>
    )
}
