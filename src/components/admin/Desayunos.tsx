
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/auth"
import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin"
import { MainDesayunos } from './compBodyAdmin/MainDesayunos'
import { NavDesayunos } from "./compBodyAdmin/NavDesayunos"
import { ModalCrearDes } from "./ModalCrearDes"
import { API_URL } from "../../constants"
import { DesayunoProps } from "./Desayuno"
import { ModalDeleteDes } from "./ModalDeleteDes"


export const Desayunos = () => {
  const { user } = useContext(AuthContext);
  const { token } = useContext(AuthContext);
  const [desayunos, setDesayunos] = useState<DesayunoProps[]>([]);
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState<{ open: boolean, desayuno: DesayunoProps | null }>({ open: false, desayuno: null });
  const [isOpenDelete, setIsOpenDelete] = useState<{ open: boolean, desayuno: DesayunoProps | null }>({ open: false, desayuno: null });

  useEffect(() => {
    fetchDesayunos()
  }, [])
  const fetchDesayunos = () => {
    fetch(`${API_URL}/products`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    }).then((responseData) => {
      const filterData = responseData.filter((item: { type: string; }) => item.type == 'Desayuno');
      setDesayunos(filterData);
    }).catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
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
      fetchDesayunos()
    }).catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
  }

  const onOpenEdit = (desayuno: DesayunoProps) => {
    setIsOpenEdit({ open: true, desayuno: desayuno })
  }
  const onCloseEdit = () => {
    setIsOpenEdit({ open: false, desayuno: null })
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
      fetchDesayunos()
    }).catch((error) => {
      console.error('Error al obtener los datos:', error);
    })
  }

  const onOpenDelete = (desayuno: DesayunoProps) => {
    setIsOpenDelete({ open: true, desayuno: desayuno })
  }

  const onCloseDelete = () => {
    setIsOpenDelete({ open: false, desayuno: null })
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
      fetchDesayunos()
    }).catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
  }



  return (
    <>
      {isOpenCreate? <ModalCrearDes {...{ desayuno: null, onCloseProd: onCloseCreate, createProduct, editProduct}} /> : null}
      {isOpenEdit.open? <ModalCrearDes {...{ desayuno: isOpenEdit.desayuno, onCloseProd: onCloseEdit, createProduct, editProduct}}/> : null}
      {isOpenDelete.open? <ModalDeleteDes {...{ desayuno: isOpenDelete.desayuno, onCloseDelete, deleteProduct}}/> : null}
      <div className='contenedor'>
        <HeaderAdmin role={user!.role} userName={user!.name} />
        <MainDesayunos {...{desayunos, onOpenDelete, onOpenEdit }} />
        <NavDesayunos {...{ onOpen: onOpenCreate }} />
      </div>
    </>
  )
}
