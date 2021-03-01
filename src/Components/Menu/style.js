import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

export const MenuContainer = styled.div`
  width: 100%;
  padding: 15px;
  background-color: white;
  position: fixed;
  top: 0%;
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.17);
`;

export const MenuWrap = styled.div`
  max-width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-grow: 1;
`;

export const LinkMenu = styled.a`
  color: #071762;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-decoration: none;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #05dbf2;
    border-bottom: 2px solid #05dbf2;
  }
`;

export const Logo = styled.img`
  width: 200px;
`;

export const CartIcon = styled(ShoppingCartOutlinedIcon)`
  color: #071762;

  &:hover {
    color: #05dbf2;
  }
`;
