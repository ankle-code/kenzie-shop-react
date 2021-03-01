import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Product from "../../Components/Product";

const Purchase = () => {
  const params = useParams();
  const products = useSelector((state) => state.products);
  const productSelected = products.find(({ id }) => id === params.id);

  return (
    <div>
      <h2>Deseja colocar no carrinho?</h2>
      <Product isSeeingDetails product={productSelected} />
    </div>
  );
};

export default Purchase;
