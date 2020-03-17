import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Shopping } from "../../assets/shopping-bag.svg";
import { ToggleCartHidden } from "../../redux/cart/cart.action";

import "./cart-icon.styles.scss";

const Cart = ({ToggleCartHidden}) => (
  <div className="cart-icon" onClick={ToggleCartHidden} >
    <Shopping className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
  });

export default connect(null,mapDispatchToProps)(Cart);
