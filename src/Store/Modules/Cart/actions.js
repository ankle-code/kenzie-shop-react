export const addToCart = (list) => ({
  type: "ADD_TO_CART",
  list,
});

export const removeFromCart = (list) => ({
  type: "REMOVE_FROM_CART",
  list,
});
