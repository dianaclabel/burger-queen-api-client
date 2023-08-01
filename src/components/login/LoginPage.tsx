import { FormEventHandler, useContext } from "react";
// import burgerMobile from "../../assets/burgerMobile.png";
import logo from "../../assets/logo.png";
import burgerTablet from "../../assets/burgerTablet.png";
import { AuthContext } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { TUser } from "../../types/user";
import { AuthService } from "../../services/auth";

export const LoginPage = () => {
  const navigate = useNavigate();
  //useContext(AuthContext) se usa el auth context para traer los valores de authContext.provider
  const { setToken, setUser } = useContext(AuthContext);

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    //consumiendo la API
    AuthService.login(email, password)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          alert("login exitoso");

          response.json().then((data: { accessToken: string; user: TUser }) => {
            console.log(data);

            //Guardar la data en disco
            localStorage.setItem("Auth-token", data.accessToken);
            localStorage.setItem("Auth-user", JSON.stringify(data.user));

            //Guardar la data en memoria
            setToken(data.accessToken);
            setUser(data.user);

            //navegacion
            switch (data.user.role) {
              case "Mesero/a":
                navigate("/waiter/menu");
                break;

              case "Jefe de cocina":
                navigate("/kitchen/orders");
                break;

              case "admin":
                navigate("/admin");
                break;
            }
          });
        } else {
          alert("Correo o contraseña incorrectos");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("No se pudo establecer una conexion");
      });
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="bg-orange-400 mb-16 pt-14 md:pt-8 md:h-[43vh]">
        <img src={logo} alt="Logo" className="w-[130px] mx-auto mb-3" />
        <img
          src={burgerTablet}
          alt="burger"
          className="relative -bottom-[102px] md:-bottom-14 -mt-[100px] w-full "
        />
      </div>
      <div className="p-14 md:px-20 md:py-5 md:mt-44">
        <p className="text-center text-orange-400 font-rammetto py-5 text-2xl">
          Bienvenid@
        </p>
        <form onSubmit={onSubmit} className="md:w-[60%] md:mx-auto">
          <div className="mb-4">
            <label className="block font-bold pb-2">Correo</label>
            <input
              type="email"
              name="email"
              className="block rounded-xl w-full py-1 px-4 border border-orange-900 "
              placeholder="example@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label className="block font-bold pb-2">Contraseña</label>
            <input
              type="password"
              name="password"
              className="block rounded-xl w-full py-1 px-4 border border-orange-900"
              placeholder="***********"
            />
          </div>
          <button className="bg-orange-400 w-full p-2 rounded-xl text-white font-bold cursor-pointer ease-out duration-300">
            Iniciar sesión
          </button>
        </form>
        <p className="text-center mt-10">@ByDiana&Leo</p>
      </div>
    </div>
  );
};
