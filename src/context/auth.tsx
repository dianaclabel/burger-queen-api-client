import { createContext, useContext, useState } from "react";
import { TUser } from "../types/user";

// Context

type TAuthContext = {
  user: TUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<TUser | undefined>>;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
};

export const AuthContext = createContext({} as TAuthContext);

type AuthProviderProps = {
  children: JSX.Element | JSX.Element[];
};

// Provider

export const AuthProvider = ({ children }: AuthProviderProps) => {
  //
  const [user, setUser] = useState<TUser>();
  const [token, setToken] = useState("");

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook
// En lugar de hacer: useContext(AuthContext)
// Hacemos: useAuth()
export const useAuth = () => useContext(AuthContext);
