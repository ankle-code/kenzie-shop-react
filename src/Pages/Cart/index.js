import { useSelector } from "react-redux";
import Product from "../Product";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Carrinho</h1>
      {cart.map((product, key) => (
        <Product key={key} product={product} isRemovable />
      ))}
    </div>
  );
};

export default Cart;
