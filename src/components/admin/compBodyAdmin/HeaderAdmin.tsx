
type Props = {
    role: string;
    userName: string;
};

export const HeaderAdmin = ({role, userName}: Props) => {
  return (
    <>
        <header>
            <img className='logo' src="src/assets/Logo.png"/>
                <h1 className='textoAdmin'>{role}</h1>
            <div className='usuario'>
                <img className='iconCustomer' src="src/assets/Customer.png" />
                <p>{userName}</p>
            </div>         
        </header>
    </>
   
  )
}
