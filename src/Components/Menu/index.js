import { MenuContainer, MenuWrap, LinkMenu, Logo, CartIcon } from "./style";
import logo from "../../Images/logo.png";

const Menu = () => {
  return (
    <MenuContainer>
      <Logo src={logo} />
      <MenuWrap>
        <LinkMenu href="/">Home</LinkMenu>
        <LinkMenu href="products">Produtos</LinkMenu>
        <LinkMenu href="cart">
          <CartIcon />
        </LinkMenu>
      </MenuWrap>
    </MenuContainer>
  );
};

export default Menu;
