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
          <a href="/" className={styleNav.containerLink}>
            <img src={carta} alt="carta" />
            <p>Carta</p>
          </a>
        </li>

        <li className={styleNav.item}>
          <a href="/" className={styleNav.containerLink}>
            <img src={order} alt="pedido" />
            <p>Pedidos</p>
          </a>
        </li>

        <li className={styleNav.item}>
          <a href="/" className={styleNav.containerLink}>
            <img src={logout} alt="salir" />
            <p>Salir</p>
          </a>
        </li>
      </ul>
    </div>
  );
};
