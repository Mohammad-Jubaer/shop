import { cartActionType } from "./cart.type";
import { addItemTocart, removeItem, decreaseItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItem: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActionType.ADD_ITEM:
      return {
        ...state,
        cartItem: addItemTocart(state.cartItem, action.payload)
      };

    case cartActionType.DECREASE_ITEM:
      return {
        ...state,
        cartItem: decreaseItem(state.cartItem, action.payload)
      };
    case cartActionType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItem: removeItem(state.cartItem, action.payload)
      };
    default:
      return state;
  }
};

export default CartReducer;
