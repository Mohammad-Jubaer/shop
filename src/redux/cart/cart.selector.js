import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItem = createSelector(selectCart, cart => cart.cartItem);

export const selectCartItemCount = createSelector(selectCartItem, cartItem =>
  cartItem.reduce((accumulated, item) => accumulated + item.quantity, 0)
);

export const selectCartHidden = createSelector(selectCart, cart => cart.hidden);
