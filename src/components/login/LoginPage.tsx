import { FormEventHandler } from "react";
import burgerMobile from "../../assets/burgerMobile.png";
import logo from "../../assets/logo.png";
import { API_URL } from "../../constants";

export const LoginPage = () => {
  const login: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("login", event);

    const formData = new FormData(event.target as HTMLFormElement);

    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    fetch(API_URL + "/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          alert("login exitoso");

          response.json().then((data) => {
            console.log(data);

            /** @todo: Guardar el accessToken en localStorage y navegar al dashboard */
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
      <div className="bg-orange-400 mb-16 pt-10">
        <img src={logo} alt="Logo" className="w-[132px] mx-auto" />
        <img
          src={burgerMobile}
          alt="burger"
          className="relative -bottom-20 -mt-20 w-full"
        />
      </div>
      <div className="px-12">
        <form onSubmit={login}>
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
