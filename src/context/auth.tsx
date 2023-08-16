import { createContext, useState } from "react";
import { TUser } from "../types/user";

const initialUserStr = localStorage.getItem("Auth-user");
const initialUser = initialUserStr ? JSON.parse(initialUserStr) : undefined;
const initialToken = localStorage.getItem("Auth-token") ?? "";

type TAuthContext = {
  user: TUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<TUser | undefined>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

//creando un contexto
export const AuthContext = createContext({} as TAuthContext);

// Provider

type AuthContextProviderProps = {
  children: JSX.Element | React.ReactNode;
};
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  //Se guarda los valores de user y token
  const [user, setUser] = useState<TUser | undefined>(initialUser);
  const [token, setToken] = useState(initialToken);

  return (
    //Se esta utilizando el contexto creado, Provider Es un componente que proporciona los datos que desea compartir con sus componentes hijos.
    <AuthContext.Provider value={{ user, token, setToken, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook
// En lugar de hacer: useContext(AuthContext)
// Hacemos: useAuth()
// export const useAuth = () => useContext(AuthContext);
