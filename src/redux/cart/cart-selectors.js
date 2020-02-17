import { createSelector } from 'reselect';

const selectCart = state => state.cart; //slice the state you want

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0)
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0)
);
