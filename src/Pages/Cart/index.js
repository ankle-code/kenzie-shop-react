import { useSelector } from "react-redux";
import Product from "../../Components/Product";
import { CartContainer } from "./style";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Carrinho</h1>
      <p>
        Total: R${" "}
        {cart.length > 0
          ? cart.reduce((acc, { price }) => acc + price, 0).toFixed(3)
          : 0}
        ,00
      </p>
      <CartContainer>
        {cart.map((product, key) => (
          <Product key={key} product={product} isRemovable />
        ))}
      </CartContainer>
    </div>
  );
};

export default Cart;
