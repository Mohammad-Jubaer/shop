import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custombutton/custom-button.component";
import { selectCartItem } from "../../redux/cart/cart.selector";
import CartItem from "../cartitem/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDrop = ({ cartItem }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItem.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton isInverted>GO to Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItem: selectCartItem(state)
});
export default connect(mapStateToProps)(CartDrop);
