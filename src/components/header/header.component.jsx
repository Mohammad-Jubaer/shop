import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo  />
    </Link>
    <div className="options">
        <Link to="/shop" className='option'>SHOP</Link>
        <Link to='/' className='option'>CONTACT</Link>
        <Link to='/signinout' className='option'>SIGNin</Link>

    </div>
  </div>
);
export default Header;
