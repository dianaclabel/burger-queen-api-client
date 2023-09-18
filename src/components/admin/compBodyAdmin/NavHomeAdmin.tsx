import { AuthContext } from "../../../context/auth";
import { useContext } from "react";

export const NavHomeAdmin = () => {
  const { setToken, setUser } = useContext(AuthContext);
  return (
    <>
      <nav className="navHomeAdmin">
        <a
          onClick={() => {
            setToken("");
            setUser(undefined);
            localStorage.removeItem("Auth-token");
            localStorage.removeItem("Auth-user");
          }}
        >
          <img className="iconLogout" src="src/assets/iconsAdmin/Logout.svg" />
        </a>
      </nav>
    </>
  );
};
