
export type NavTrabModalProps = {
  onOpen: () => void
}

export const NavTrabajadores = ({onOpen}: NavTrabModalProps) => {
  return (
    <>
        <nav className="navTrabajadores">
            <img className='iconReturn' src="../src/assets/iconsAdmin/Return.svg" />
            <img onClick= {onOpen} className='iconUser' src="../src/assets/iconsAdmin/User.svg" />
            <img className='iconLogout' src="../src/assets/iconsAdmin/Logout.svg" />
        </nav>
    </>
  )
}
