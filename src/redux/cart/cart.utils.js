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

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(item => item.id === itemToRemove.id);

  if (existingCartItem.quantity === 1)
    return cartItems.filter(item => item.id !== itemToRemove.id);

  return cartItems.map(cartItem => {
    return cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};
