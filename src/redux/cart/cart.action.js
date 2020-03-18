import { cartActionType } from "./cart.type";

export const ToggleCartHidden = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
  type: cartActionType.ADD_ITEM,
  payload: item
});
