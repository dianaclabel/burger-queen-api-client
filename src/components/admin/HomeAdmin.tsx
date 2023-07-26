
import './StyleAdmin.css'
import { useNavigate } from 'react-router-dom'
import { HeaderAdmin } from './compBodyAdmin/HeaderAdmin'
import { MainHomeAdmin } from './compBodyAdmin/MainHomeAdmin'
import { NavHomeAdmin } from './compBodyAdmin/NavHomeAdmin'

export const HomeAdmin = () => {

    let navigator = useNavigate()

    const onTrabajadores = () => {
        navigator("/trabajadores")
    }
    const onDesayunos = () => {
        navigator("/desayunos")
    }
    const onAlmuerzos = () => {
        navigator("/almuerzos")
    }
    const onPedidos = () => {
        navigator("/pedidos")
    }

    return (
        <>
            <div className='contenedor'>
                <HeaderAdmin role="Admin" userName="Federico" />
                <MainHomeAdmin {...{
                    onTrabajadores: onTrabajadores,
                    onDesayunos: onDesayunos,
                    onAlmuerzos: onAlmuerzos,
                    onPedidos: onPedidos
                }
                } />
                <NavHomeAdmin />
            </div>
        </>
    )
}
