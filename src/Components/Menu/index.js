import { MenuContainer, MenuWrap, LinkMenu, Logo, CartIcon } from "./style";
import { useHistory } from "react-router-dom";
import logo from "../../Images/logo.png";

const Menu = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <MenuContainer>
      <Logo src={logo} />
      <MenuWrap>
        <LinkMenu onClick={() => handleNavigation("/")}>Home</LinkMenu>
        <LinkMenu onClick={() => handleNavigation("/products")}>
          Produtos
        </LinkMenu>
        <LinkMenu onClick={() => handleNavigation("/cart")}>
          <CartIcon />
        </LinkMenu>
      </MenuWrap>
    </MenuContainer>
  );
};

export default Menu;
