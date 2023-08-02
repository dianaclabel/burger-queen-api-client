import { Link } from "react-router-dom";
import carta from "../../assets/carta.png";
import logout from "../../assets/icons/logout.png";
import order from "../../assets/icons/order.png";

export const Nav = () => {
  const styleNav = {
    containerNav: "bg-orange-400",
    items: "flex justify-around items-center",
    item: "text-white",
    containerLink: "flex items-center justify-center p-2 flex-col ",
  };

  return (
    <div className={styleNav.containerNav}>
      <ul className={styleNav.items}>
        <li className={styleNav.item}>
          <Link to="/waiter/menu" className={styleNav.containerLink}>
            <img src={carta} alt="carta" />
            <p>Carta</p>
          </Link>
        </li>

        <li className={styleNav.item}>
          <Link to="/waiter/orders" className={styleNav.containerLink}>
            <img src={order} alt="pedido" />
            <p>Pedidos</p>
          </Link>
        </li>

        <li className={styleNav.item}>
          <Link to="/login" className={styleNav.containerLink}>
            <img src={logout} alt="salir" />
            <p>Salir</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
