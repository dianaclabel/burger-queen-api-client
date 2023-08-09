import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth";
import { PedidoAdmin, PedidoProps } from "../PedidoAdmin"
import { API_URL } from "../../../constants";


export const MainPedidosAdmin = () => {
  const { token } = useContext(AuthContext);
  const [pedidos, setPedidos] = useState<PedidoProps[]>([])

  useEffect(() => {
    fetch(`${API_URL}/orders`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
          if(!response.ok){
            throw new Error('Error en la solicitud');
          }
          return response.json();
        }).then((responseData) => {
          setPedidos(responseData);

          }).catch((error) => {
            console.error('Error al obtener los datos:', error);
            })
  },[])

  const listPedidos = pedidos.map(p =>
    <PedidoAdmin {...p} key={p.client} />
  )
  return (
    <>
      <main>
        <h2 className="titulo" >Pedidos</h2>
        {listPedidos}
      </main>
    </>
  )
}
