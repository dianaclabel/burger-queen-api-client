import { FormEventHandler, useContext } from "react";
// import burgerMobile from "../../assets/burgerMobile.png";
import bgLogo from "../../assets/bg-login.png";
import logo from "../../assets/logo.png";
import burgerTablet from "../../assets/burgerTablet.png";
import { AuthContext } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { TUser } from "../../types/user";
import { AuthService } from "../../services/auth";
import { toast } from "react-hot-toast"; //es una biblioteca

export const LoginPage = () => {
  const navigate = useNavigate();
  //useContext(AuthContext) se usa el auth context para traer los valores de authContext.provider
  const { setToken, setUser } = useContext(AuthContext);

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    // Evita que el formulario se envíe y la página se recargue
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    //consumiendo la API
    AuthService.login(email, password)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          toast.success("login exitoso");
          //convertir el cuerpo Json a javascript
          response.json().then((data: { accessToken: string; user: TUser }) => {
            console.log(data);

            //Guardar la data en disco
            //almacena datos en el almacenamiento local del navegador web.
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
                navigate("/kitchen");
                break;

              case "Admin":
                navigate("/admin");
                break;
            }
          });
        } else {
          toast.error("Correo o contraseña incorrectos");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("No se pudo establecer una conexion");
      });
  };

  return (
    <div className="min-h-screen bg-orange-50 xl:flex ">
      <div className="bg-[#f58c1e] mb-16 pt-14 md:pt-8 md:h-[43vh] xl:min-h-[75vh] xl:w-[50%] xl:pt-[1.5rem] ">
        <img src={logo} alt="Logo" className="w-[130px] mx-auto mb-3 " />

        <img
          src={burgerTablet}
          alt="burger"
          className="relative -bottom-[102px] md:-bottom-14 -mt-[100px] w-full xl:w-[60%} xl:bottom-[-70px] xl:z-10"
        />
        <img
          src={bgLogo}
          alt="bg-login"
          className="hidden xl:block xl:w-full xl:relative xl:bottom-[30px]"
        />
      </div>
      <div className="p-14 md:px-20 md:py-5 md:mt-44 xl:w-[50%] xl:mt-[6rem] ">
        <form
          onSubmit={onSubmit}
          className="md:w-[60%] md:mx-auto xl:border-solid xl:border-[#f58c1e] xl:border-[2px] xl:p-[2rem] xl:w-[80%] xl:min-h-[60vh] xl:rounded-xl xl:bg-[#F5F0EB]"
        >
          <p className="text-center text-orange-400 font-rammetto py-5 text-2xl xl:text-3xl">
            Bienvenid@
          </p>
          <div className="mb-4 xl:my-[2rem]">
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
