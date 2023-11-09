import { MenuItem, MenuLista, MenuLogo, MenuNav } from "./style";
import logo from "../../assets/logo.png";
export const Menu = () => {
  return (
    <MenuNav>
      <MenuLogo src={logo} />
      <MenuLista>
        <li>
          <MenuItem to={"/"}>Home</MenuItem>
        </li>

        <li>
          <MenuItem to={"/login"}>Login</MenuItem>
        </li>

        <li>
          <MenuItem to={"/cadastrar"}>Cadastrar</MenuItem>
        </li>
      </MenuLista>
    </MenuNav>
  );
};
