import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../Store/Modules/Cart/thunks";
import {
  ProductWraper,
  ProductTitle,
  ProductImage,
  ProductButton,
} from "./style";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();
  return (
    <ProductWraper>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductImage src={product.image} />
      <p>Preço: {`R$ ${product.price},00`}</p>
      {isRemovable ? (
        <ProductButton
          product={product}
          isRemovable
          onClick={() => dispatch(removeFromCartThunk(product.id))}
        >
          Remover do carrinho
        </ProductButton>
      ) : (
        <ProductButton
          product={product}
          onClick={() => dispatch(addToCartThunk(product))}
        >
          Adiconar ao carrinho
        </ProductButton>
      )}
    </ProductWraper>
  );
};

export default Product;
