import { Switch, Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Product from "../Components/Product";
import Products from "../Pages/Products";
import Details from "../Pages/Details";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/product">
        <Product />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route exact path="/details/:id">
        <Details />
      </Route>
    </Switch>
  );
};

export default Routers;
