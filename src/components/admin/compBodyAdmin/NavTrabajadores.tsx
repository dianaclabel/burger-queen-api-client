import { AuthContext } from "../../../context/auth";
import { useContext } from "react";

export type NavTrabModalProps = {
  onOpen: () => void;
};

export const NavTrabajadores = ({ onOpen }: NavTrabModalProps) => {
  const { setToken, setUser } = useContext(AuthContext);
  return (
    <>
      <nav className="navTrabajadores">
        <img className="iconReturn" src="../src/assets/iconsAdmin/Return.svg" />
        <img
          onClick={onOpen}
          className="iconUser"
          src="../src/assets/iconsAdmin/User.svg"
        />
        <a
          onClick={() => {
            setToken("");
            setUser(undefined);
            localStorage.removeItem("Auth-token");
            localStorage.removeItem("Auth-user");
          }}
        >
          <img
            className="iconLogout"
            src="../src/assets/iconsAdmin/Logout.svg"
          />
        </a>
      </nav>
    </>
  );
};
