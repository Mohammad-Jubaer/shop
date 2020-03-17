import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./header.styles.scss";
import Cart from "../cart/cart.component";
import CartDrop from "../cartdrop/cart-drop.component";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signinout">
            Sign In
          </Link>
        )}
        <Cart />
      </div>
      {!hidden ? <CartDrop /> : null}
    </div>
  );
};
const mapStateToProps = ({ user:{currentUser}, cart:{hidden} }) => ({
  currentUser:currentUser,
  hidden: hidden
});

export default connect(mapStateToProps)(Header);
