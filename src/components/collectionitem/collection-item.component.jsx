import React from "react";
import "./collection-item.styles.scss";
import CustomButton from '../custombutton/custom-button.component';

const CollectionItem = ({ name, price, imageUrl }) => (
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
    <CustomButton isInverted>Add To Cart</CustomButton>
  </div>
  
);
export default CollectionItem;
