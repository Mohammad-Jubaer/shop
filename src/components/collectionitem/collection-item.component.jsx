import React from "react";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.action";
import "./collection-item.styles.scss";
import CustomButton from "../custombutton/custom-button.component";

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl}`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addCartItem(item)} isInverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addCartItem: item => dispatch(addCartItem(item))
});
export default connect(null, mapDispatchToProps)(CollectionItem);
