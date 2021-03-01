import { createStore, combineReducers, applyMiddleware } from "redux";
import productsReducer from "./Modules/Products/reducer";
import cartReducer from "./Modules/Cart/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

console.log(reducers.products);
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
