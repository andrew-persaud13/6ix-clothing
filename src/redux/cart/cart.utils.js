export const addItemToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(item => itemToAdd.id === item.id);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
