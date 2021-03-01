import { useSelector } from "react-redux";
import Product from "../Product";
import { CartContainer } from "./style";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Carrinho</h1>
      <CartContainer>
        {cart.map((product, key) => (
          <Product key={key} product={product} isRemovable />
        ))}
      </CartContainer>
    </div>
  );
};

export default Cart;
