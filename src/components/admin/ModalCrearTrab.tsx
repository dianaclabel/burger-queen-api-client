/* import { useModal } from "./hooksAdmin/useModal"; */

type ModalCrearTrabProps = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalCrearTrab = ({isOpen,closeModal}: ModalCrearTrabProps) => {
    const titulo = "Añadir trabajador";
    /* const [isOpenModal, openModal, closeModal] = useModal(false); */
  return (
    <>
        <article className={`modal ${isOpen && "is-open"}`}>
          <div className="modal-container">
            <button className="modal-close" /* onClick={closeModal} */>X</button>
            <h3 className="titulo">{titulo}</h3>
            
              <form className="boxInputsModal">
                    <input className="inputModal" id="nameT" type="text" placeholder="Name"/>
                    <input className="inputModal" id="emailT" type="text" placeholder="Email"/>
                    <input className="inputModal" id="roleT" type="text" placeholder="Role"/>
                    
                    <button className="buttonModal" type="submit">Agregar</button>
                    
              </form>

            </div>       
        </article>
    </>
  )
}
