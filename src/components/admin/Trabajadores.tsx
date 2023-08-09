import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth";
import { MainTrabajadores } from "./compBodyAdmin/MainTrabajadores"
import { NavTrabajadores } from "./compBodyAdmin/NavTrabajadores"
import { HeaderAdmin } from "./compBodyAdmin/HeaderAdmin";
import { ModalCrearTrab } from "./ModalCrearTrab";
import { API_URL } from "../../constants";
import { TrabajadorProps } from "./Trabajador";
import { ModalDeleteTrab } from "./ModalDeleteTrab";


export const Trabajadores = () => {

  const { user } = useContext(AuthContext);
  const { token } = useContext(AuthContext);
  const [trabajadores, setTrabajadores] = useState<TrabajadorProps[]>([]);
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState<{ open: boolean, trabajador: TrabajadorProps | null }>({ open: false, trabajador: null });
  const [isOpenDelete, setIsOpenDelete] = useState<{ open: boolean, trabajador: TrabajadorProps | null }>({ open: false, trabajador: null });
  

  useEffect(() => {
    fetchTrabajadores()
  }, [])

  const fetchTrabajadores = () => {
    fetch(`${API_URL}/users`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((response) => {// Verificar si la solicitud fue exitosa
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }// Leer los datos de la respuesta y retornarlos
      return response.json();
    }).then((responseData) => {// Actualizar el estado 'data' con los datos obtenidos
      setTrabajadores(responseData);
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

  const onCreateUser = (username: String, email: String, password: String, role: String) => {
    onCloseCreate()
    fetch(`${API_URL}/users`, {
      method: 'POST',
      body: JSON.stringify({
        "name": username,
        "email": email,
        "password": password,
        "role": role
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
      fetchTrabajadores()
    }).catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
  }

  const onOpenEdit = (trabajador: TrabajadorProps) => {
    setIsOpenEdit({ open: true, trabajador: trabajador })
  }
  const onCloseEdit = () => {
    setIsOpenEdit({ open: false, trabajador: null })
  }

  const onEditUser = (username: String, email: String, password: String, role: String, id: string) => {
    onCloseEdit()
    fetch(`${API_URL}/users/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        "name": username,
        "email": email,
        "password": password,
        "role": role
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
      fetchTrabajadores()
    }).catch((error) => {
      console.error('Error al obtener los datos:', error);
    })
  }

  const onOpenDelete = (trabajador: TrabajadorProps) => {
    setIsOpenDelete({ open: true, trabajador: trabajador })
  }

  const onCloseDelete = () => {
    setIsOpenDelete({ open: false, trabajador: null })
  }

  const onDeleteUser = (id: string) => {
    onCloseDelete()
    fetch(`${API_URL}/users/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((response) => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
    }).then((_) => {// Actualizar el estado 'data' con los datos obtenidos
      fetchTrabajadores()
    }).catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
  }

  return (
    <>
      
      {isOpenCreate? <ModalCrearTrab {...{ trabajador: null, onClose: onCloseCreate, onCreateUser, onEditUser }} /> : null}
      {isOpenEdit.open ? <ModalCrearTrab {...{ trabajador: isOpenEdit.trabajador, onClose: onCloseEdit, onCreateUser, onEditUser }} /> : null}
      {isOpenDelete.open ? <ModalDeleteTrab {...{ trabajador: isOpenDelete.trabajador, onCloseDelete, onDeleteUser }} /> : null}
      <div className="contenedor">
        <HeaderAdmin role={user!.role} userName={user!.name} />
        <MainTrabajadores {...{ trabajadores, onOpenDelete, onOpenEdit }} />
        <NavTrabajadores {...{ onOpen: onOpenCreate }} />
      </div>
    </>
  );
};
