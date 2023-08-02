/* import React, { useEffect, useState } from 'react'; */

export type TrabajadorProps = {
  email: string,
  pasword: string,
  role: string,
  id: string,
}

export const Trabajador = (trabajador: TrabajadorProps) => {
  
/*   const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchData = () => {
      // Realizar la solicitud GET con autorización
      fetch('http://localhost:8080/users', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5MDkyNTI1MiwiZXhwIjoxNjkwOTI4ODUyLCJzdWIiOiIyIn0.gaskPkiBf-tVtXu-bWW8djQG5wdq7WuteQwQemxcwGc',
        },
      })
        .then((response) => {// Verificar si la solicitud fue exitosa
          if (!response.ok) {
            throw new Error('Error en la solicitud');
          }// Leer los datos de la respuesta y retornarlos
          return response.json();
        })
        .then((responseData) => {// Actualizar el estado 'data' con los datos obtenidos
          setData(responseData);
        })
        .catch((error) => {
          // Manejar errores
          console.error('Error al obtener los datos:', error);
        });
    };
    fetchData();
  }, []); */
  
  return (
    <>
        <section className='boxTrabajador'>
            <div className="containerTextTrab">
                    <p>Email: {trabajador.email}</p>
                    <p>Role: {trabajador.role}</p>
            </div>
            <div className="containerIconsTrab">
                    <img className="iconEdit" src="../src/assets/iconsAdmin/Edit.svg" alt="Editar" />
                    <img className="iconDelete" src="../src/assets/iconsAdmin/Delete.svg" alt="Eliminar" />
            </div>
        </section>
    </>
  )
}
