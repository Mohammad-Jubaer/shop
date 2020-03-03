import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const Menuitem = ({ title, imageUrl, size, linkUrl,history,match }) => (
  <div onClick={() => {history.push(`${match.url}${linkUrl}`)}} className={`${size} menu-item hover`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <p className="subtitle">SHOP NOW</p>
    </div>
  </div>
);

export default withRouter(Menuitem);
