import logo from "../../assets/Logo.png";
import user from "../../assets/icons/user.png";

type Props = {
  role: string;
  userName: string;
};

export const Header = ({ role, userName }: Props) => {
  const styleHeader = {
    containerHeader:
      "w-full bg-orange-400 flex h-24 justify-between items-center px-6",
    role: "font-extrabold text-white text-base font-inter mt-8",
    nameUser: "text-white text-sm text-center",
    logo: "w-16 h-16",
  };

  return (
    <div className={styleHeader.containerHeader}>
      <img src={logo} alt="logo" className={styleHeader.logo} />
      <p className={styleHeader.role}>{role}</p>
      <div>
        <img src={user} alt="icon-user" />
        <p className={styleHeader.nameUser}>{userName}</p>
      </div>
    </div>
  );
};
