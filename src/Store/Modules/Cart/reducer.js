const cartReducer = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return action.list;
    case "REMOVE_FROM_CART":
      return action.list;
    default:
      return state;
  }
};

export default cartReducer;
