import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";
import { addCartItem, removeCartItem ,decreaseItem} from "../../redux/cart/cart.action";

const CheckoutItem = ({ item, dispatch }) => {
  const { name, quantity, price, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => dispatch(decreaseItem(item))} className="arrow">&#10094;</div>
        <span className="value">{quantity}</span>
        <div onClick={() => dispatch(addCartItem(item))} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => dispatch(removeCartItem(item))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default connect(null)(CheckoutItem);
