import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../Store/Modules/Cart/thunks";
import {
  ProductWraper,
  ProductTitle,
  ProductImage,
  ProductButton,
  SaleButton,
} from "./style";

const Product = ({ product, isRemovable = false, isSeeingDetails = false }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <ProductWraper isSeeingDetails={isSeeingDetails}>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductImage src={product.image} />
      <p>Preço: {`R$ ${product.price},00`}</p>
      {!isSeeingDetails && (
        <ProductButton onClick={() => history.push(`/details/${product.id}`)}>
          Veja Mais
        </ProductButton>
      )}
      {isRemovable ? (
        <SaleButton
          product={product}
          isRemovable
          onClick={() => dispatch(removeFromCartThunk(product.id))}
        >
          Remover do carrinho
        </SaleButton>
      ) : (
        <SaleButton
          product={product}
          onClick={() => {
            dispatch(addToCartThunk(product));
            history.push("/cart");
          }}
        >
          Adiconar ao carrinho
        </SaleButton>
      )}
    </ProductWraper>
  );
};

export default Product;
