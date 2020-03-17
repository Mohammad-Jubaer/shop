import React from "react";
import CustomButton from "../custombutton/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDrop = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton isInverted>GO to Checkout</CustomButton>
  </div>
);
export default CartDrop;
