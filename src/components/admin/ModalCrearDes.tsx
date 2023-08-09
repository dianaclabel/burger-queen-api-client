import { DesayunoProps } from "./Desayuno"

export type ModalProdDesProps = {
    desayuno: DesayunoProps | null,
    onCloseProd: () => void,
    createProduct: (name:string, price:string, type:string) => void,
    editProduct: (name:string, price:string, type:string, id:string) => void
  }

export const ModalCrearDes = ({desayuno, onCloseProd, createProduct, editProduct}: ModalProdDesProps) => {
  return (
    <>
    <article className="modal is-open">
      <div className="modal-container">
        <button onClick={onCloseProd} className="modal-close">X</button>
        <h3 className="titulo">{desayuno == null? "Agregar almuerzo" : "Editar almuerzo"}</h3>

        <form onSubmit={(e) => {
          e.preventDefault()
           const formData = new FormData(e.target as HTMLFormElement);
           const name = formData.get("nameP") as string;
           const price = formData.get("priceP") as string;
           const type = formData.get("typeT") as string
        if(desayuno == null){
          createProduct(name, price, type)
        }else{
          editProduct(name, price, type, desayuno.id)
        }

        }} className="boxInputsModal">
          <input className="inputModal" name="nameP" type="text" defaultValue={desayuno?.name} placeholder="Product name" required/>
          <input className="inputModal" name="priceP" type="number" defaultValue={desayuno?.price}  placeholder="Price" required/>
          <input className="inputModal" name="typeT" type="text" defaultValue={desayuno?.type}  placeholder="Type" required/>

          <button className="buttonModal" type="submit">{desayuno == null? "Agregar" : "Editar"}</button>

        </form>

      </div>
    </article>
  </>
  )
}
