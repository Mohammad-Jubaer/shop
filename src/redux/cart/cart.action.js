import { cartActionType } from "./cart.type";

export const ToggleCartHidden = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
  type: cartActionType.ADD_ITEM,
  payload: item
});

export const removeCartItem = item => ({
  type: cartActionType.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const decreaseItem = item => ({
  type: cartActionType.DECREASE_ITEM,
  payload: item
});
