import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Shopping } from "../../assets/shopping-bag.svg";
import { ToggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemCount } from "../../redux/cart/cart.selector";

import "./cart-icon.styles.scss";

const Cart = ({ dispatch, cartItemCount }) => (
  <div className="cart-icon" onClick={()=>dispatch(ToggleCartHidden())}>
    <Shopping className="shopping-icon" />
    <span className="item-count">{cartItemCount}</span>
  </div>
);

const mapStateToProps = state => ({
  cartItemCount: selectCartItemCount(state)
});
// const mapDispatchToProps = dispatch => ({
//   ToggleCartHidden: () => dispatch(ToggleCartHidden())
// });

export default connect(mapStateToProps)(Cart);
