import React from "react";
import { connect } from "react-redux";

import  CheckoutItem  from "../../components/checkoutItem/checkout-item.component";
import { selectCartItem, selectTotal } from "../../redux/cart/cart.selector";
import "./checkout.styles.scss";

const Checkout = ({ cartItem, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItem.map(item => <CheckoutItem key={item.name} item={item}/>)}

    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = state => ({
  cartItem: selectCartItem(state),
  total: selectTotal(state)
});
export default connect(mapStateToProps)(Checkout);
