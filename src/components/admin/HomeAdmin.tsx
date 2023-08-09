
import './StyleAdmin.css'
import { useNavigate } from 'react-router-dom'
import { HeaderAdmin } from './compBodyAdmin/HeaderAdmin'
import { MainHomeAdmin } from './compBodyAdmin/MainHomeAdmin'
import { NavHomeAdmin } from './compBodyAdmin/NavHomeAdmin'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'

export const HomeAdmin = () => {

    const navigator = useNavigate()

    const onTrabajadores = () => {
        navigator("/admin/trabajadores")
    }
    const onDesayunos = () => {
        navigator("/admin/desayunos")
    }
    const onAlmuerzos = () => {
        navigator("/admin/almuerzos")
    }
    const onPedidos = () => {
        navigator("/admin/pedidos")
    }

    const { user } = useContext(AuthContext);

    return (
        <>
            <div className='contenedor'>
                <HeaderAdmin role={user!.role} userName={user!.name} />
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
