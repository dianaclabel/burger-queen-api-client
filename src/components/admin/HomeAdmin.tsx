import './HomeAdmin.css'

function HomeAdmin(){

    return(
        <>
        <div className='contenedor'>
            <div className='contenedor1'>
                <header className='color1'>
                    <img className='logo' src="src/assets/Logo.png"/>
                    <h1 className='textoAdmin'>Admin</h1>
                    <div className='usuario'>
                        <img className='iconCustomer' src="src/assets/Customer.png" />
                        <p>Federico</p>
                    </div>
                </header>
                <main className='color2'>
                    <button className='buttonHome'>Trabajadores</button>
                    <button className='buttonHome'>Desayuno</button>
                    <button className='buttonHome'>Almuerzo y Cena</button>
                    <button className='buttonHome'>Pedidos</button>
                </main>
                <footer className='color3'>
                <img className='iconLogout' src="src/assets/Logout.png" />
                </footer>
            </div>
        </div>
    </>
    )
}

export default HomeAdmin