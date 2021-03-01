import { Switch, Route } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Products from "../Pages/Products";
import Purchase from "../Pages/Purchase";

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
      <Route exact path="/purchase">
        <Purchase />
      </Route>
    </Switch>
  );
};

export default Routers;
