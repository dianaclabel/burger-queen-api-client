import burgerMobile from "../../assets/burgerMobile.png";
import logo from "../../assets/logo.png";

export const LoginPage = () => {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="bg-orange-400 mb-16 pt-10">
        <img src={logo} alt="Logo" className="w-[132px] mx-auto" />
        <img
          src={burgerMobile}
          alt="burger"
          className="relative -bottom-20 -mt-20 w-full"
        />
      </div>
      <div className="px-12">
        <form>
          <div className="mb-4">
            <label className="block font-bold pb-2">Correo</label>
            <input
              type="email"
              name="email"
              className="block rounded-xl w-full py-1 px-4 border border-orange-900 "
              placeholder="example@gmail.com"
            />
            {/* <p>Correo invalido</p> */}
          </div>

          <div className="mb-6">
            <label className="block font-bold pb-2">Contraseña</label>
            <input
              type="password"
              name="password"
              className="block rounded-xl w-full py-1 px-4 border border-orange-900"
              placeholder="***********"
            />
            {/* <p>La contraseña es requerida</p> */}
          </div>

          <button className="bg-orange-400 w-full p-2 rounded-xl text-white font-bold">
            Iniciar sesión
          </button>
        </form>

        <p className="text-center mt-10">@ByDiana&Leo</p>
      </div>
    </div>
  );
};
