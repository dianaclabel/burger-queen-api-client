
type NavDesModalProps = {
    onOpen: () => void
}

export const NavDesayunos = ({onOpen}: NavDesModalProps) => {
    return (
        <>
            <nav className="navTrabajadores">
                <img className='iconReturn' src="../src/assets/iconsAdmin/Return.svg" />
                <img onClick={onOpen} className='iconAddNew' src="../src/assets/iconsAdmin/AddNew.svg" />
                <img className='iconLogout' src="../src/assets/iconsAdmin/Logout.svg" />
            </nav>
        </>
     )
}
