import React from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import CustomButton from "../custombutton/custom-button.component";
import { ToggleCartHidden } from "../../redux/cart/cart.action";

import { selectCartItem } from "../../redux/cart/cart.selector";
import CartItem from "../cartitem/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDrop = ({ cartItem, history,dispatch }) => {
  return (
    <div className="cart-dropdown">
      {cartItem.length ? (
        <div className="cart-items">
          {cartItem.map(item => (
            <CartItem key={item.name} item={item} />
          ))}
        </div>
      ) : (
        <span className="empty-message">Your Cart is Empty </span>
      )}

      <CustomButton
        onClick={() => {
          history.push("/checkout");
         dispatch(ToggleCartHidden());
        }}
        isInverted
      >
        GO to Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItem: selectCartItem(state)
});

// const mapDispatchToProps = dispatch => ({
//   ToggleCartHidden: () => dispatch(ToggleCartHidden())
// });

export default withRouter(
  connect(mapStateToProps)(CartDrop)
);
