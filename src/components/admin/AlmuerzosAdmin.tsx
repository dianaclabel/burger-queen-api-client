import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth"
import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin"
import { MainAlmuerzos } from "./compBodyAdmin/MainAlmuerzos"
import { NavDesayunos } from "./compBodyAdmin/NavDesayunos"
import { ModalCrearProd } from "./ModalCrearProd"
import { API_URL } from "../../constants"
import { AlmuerzoProps } from "./Almuerzo"
import { ModalDeleteProd } from "./ModalDeleteProd"


export const AlmuerzosAdmin = () => {
  const { user } = useContext(AuthContext);
  const { token } = useContext(AuthContext);
  const [almuerzos, setAlmuerzos] = useState<AlmuerzoProps[]>([]);
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState<{ open: boolean, almuerzo: AlmuerzoProps | null }>({ open: false, almuerzo: null });
  const [isOpenDelete, setIsOpenDelete] = useState<{ open: boolean, almuerzo: AlmuerzoProps | null }>({ open: false, almuerzo: null }); 
  
  useEffect(() => {
    fetchAlmuerzos()
  }, [])

  const fetchAlmuerzos = () => {
    fetch(`${API_URL}/products`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    }).then((responseData) => {
      const filterData = responseData.filter((item: { type: string; }) => item.type == 'Almuerzo');
      setAlmuerzos(filterData);
    }).catch((error) => {
      console.error('Error al obtener los datos:', error);
    })
  }

  const onOpenCreate = () => {
    setIsOpenCreate(true)
  }

  const onCloseCreate = () => {
    setIsOpenCreate(false)
  }

  const createProduct = (name: string, price: string, type: string) => {
    onCloseCreate()
    fetch(`${API_URL}/products`, {
      method: 'POST',
      body: JSON.stringify({
        "name": name,
        "price": price,
        "type": type
      }),
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    }).then((response) => {// Verificar si la solicitud fue exitosa
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }// Leer los datos de la respuesta y retornarlos
      return response.json();
    }).then((_) => {// Actualizar el estado 'data' con los datos obtenidos
      fetchAlmuerzos()
    }).catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
  }

  const onOpenEdit = (almuerzo: AlmuerzoProps) => {
    setIsOpenEdit({ open: true, almuerzo: almuerzo })
  }
  const onCloseEdit = () => {
    setIsOpenEdit({ open: false, almuerzo: null })
  }

  const editProduct = (name: string, price: string, type: string, id:string ) => {
    onCloseEdit()
    fetch(`${API_URL}/products/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        "name": name,
        "price": price,
        "type": type,
      }),
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    }).then((response) => {// Verificar si la solicitud fue exitosa
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }// Leer los datos de la respuesta y retornarlos
      return response.json();
    }).then((_) => {// Actualizar el estado 'data' con los datos obtenidos
      fetchAlmuerzos()
    }).catch((error) => {
      console.error('Error al obtener los datos:', error);
    })
  }

  const onOpenDelete = (almuerzo: AlmuerzoProps) => {
    setIsOpenDelete({ open: true, almuerzo: almuerzo })
  }

  const onCloseDelete = () => {
    setIsOpenDelete({ open: false, almuerzo: null })
  }

  const deleteProduct = (id: string) => {
    onCloseDelete()
    fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
    }).then((_) => {// Actualizar el estado 'data' con los datos obtenidos
      fetchAlmuerzos()
    }).catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
  }



  return (
    <>
      {isOpenCreate? <ModalCrearProd {...{ almuerzo: null, onCloseProd: onCloseCreate, createProduct, editProduct}} /> : null}
      {isOpenEdit.open? <ModalCrearProd {...{ almuerzo: isOpenEdit.almuerzo, onCloseProd: onCloseEdit, createProduct, editProduct}}/> : null}
      {isOpenDelete.open? <ModalDeleteProd {...{ almuerzo: isOpenDelete.almuerzo, onCloseDelete, deleteProduct}}/> : null}
      <div className="contenedor">
        <HeaderAdmin role={user!.role} userName={user!.name} />
        <MainAlmuerzos {...{almuerzos, onOpenDelete, onOpenEdit}} />
        <NavDesayunos {...{ onOpen: onOpenCreate }} />
      </div>

    </>
  )
}
