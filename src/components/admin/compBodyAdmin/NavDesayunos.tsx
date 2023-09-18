import { AuthContext } from "../../../context/auth";
import { useContext } from "react";
type NavDesModalProps = {
  onOpen: () => void;
};

export const NavDesayunos = ({ onOpen }: NavDesModalProps) => {
  const { setToken, setUser } = useContext(AuthContext);
  return (
    <>
      <nav className="navTrabajadores">
        <img className="iconReturn" src="../src/assets/iconsAdmin/Return.svg" />
        <img
          onClick={onOpen}
          className="iconAddNew"
          src="../src/assets/iconsAdmin/AddNew.svg"
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
