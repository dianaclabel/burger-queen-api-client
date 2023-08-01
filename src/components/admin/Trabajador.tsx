import { useEffect, useState } from "react"

export type TrabajadorProps = {
  email: string,
  pasword: string,
  role: string,
  id: string,
}

export const Trabajador = (props: TrabajadorProps) => {
  const [trabajador, setTrabajador] = useState<TrabajadorProps | null>(null);

  useEffect(() => {
    const fetchTrabajadorData = async () => {
      try{
        const response = await fetch("http://localhost:8080/users",{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5MDg2MTA4NiwiZXhwIjoxNjkwODY0Njg2LCJzdWIiOiIyIn0.Csq3MWaNdjsVk6oSma0OZlV-RsbHJjSH6GQ0w9fFEJM'
          }
        });
        const data = await response.json();
        setTrabajador(data);
      } catch (error) {
        console.error('Error al obtener los datos del trabajador:', error);
      }
    };
    fetchTrabajadorData();
  }, [props.id]);

  if(!trabajador){
    return <p>Cargando...</p>;
  }

  return (
    <>
        <section className='boxTrabajador'>
            <div className="containerTextTrab">
                    <p>Email: {trabajador.email}</p>
                    <p>Role: {trabajador.role}</p>
            </div>
            <div className="containerIconsTrab">
                    <img className="iconEdit" src="src/assets/Edit.png" alt="Editar" />
                    <img className="iconDelete" src="src/assets/Delete.png" alt="Eliminar" />
            </div>
        </section>
    </>
  )
}
