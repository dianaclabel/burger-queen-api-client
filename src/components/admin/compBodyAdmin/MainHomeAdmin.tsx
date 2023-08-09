
export type MainProps = {
  onTrabajadores: () => void,
  onDesayunos: () => void,
  onAlmuerzos: () => void,
  onPedidos: () => void,
}
export const MainHomeAdmin = ({onTrabajadores, onDesayunos, onAlmuerzos, onPedidos}: MainProps) => {
  return (
    <>
        <main>
            <button onClick={onTrabajadores} className='buttonHome'>Trabajadores</button>
            <button onClick={onDesayunos} className='buttonHome'>Desayuno</button>
            <button onClick={onAlmuerzos} className='buttonHome'>Almuerzo y Cena</button>
            <button onClick={onPedidos} className='buttonHome'>Pedidos</button>
        </main>
    </>
  )
}
