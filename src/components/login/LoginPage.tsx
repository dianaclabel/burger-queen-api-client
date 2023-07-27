import { FormEventHandler, useState } from "react";
// import burgerMobile from "../../assets/burgerMobile.png";
import logo from "../../assets/logo.png";
import { API_URL } from "../../constants";
import burgerTablet from "../../assets/burgerTablet.png";

export const LoginPage = () => {
  const login: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("login", event);

    const formData = new FormData(event.target as HTMLFormElement);

    const dataUser = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    //consumiendo la API
    fetch(API_URL + "/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser),
    })
      .then((response) => {
        console.log(response);
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
        {/* onSubmit={login} */}
        <form onSubmit={login} className="md:w-[60%] md:mx-auto">
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

          <button className="bg-orange-400 w-full p-2 rounded-xl text-white font-bold cursor-pointer ease-out duration-300">
            Iniciar sesión
          </button>
        </form>

        <p className="text-center mt-10">@ByDiana&Leo</p>
      </div>
    </div>
  );
};
