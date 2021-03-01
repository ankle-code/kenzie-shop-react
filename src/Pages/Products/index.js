import Product from "../Product";
import { ProductsContainer } from "./style";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <div>
      <h1>Produtos</h1>
      <ProductsContainer>
        {products.map((product, key) => (
          <Product key={key} product={product} />
        ))}
      </ProductsContainer>
    </div>
  );
};

export default Products;
