import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        Shop
      </Link>
      <Link className="link" to="/cart">
        <ShoppingCart size={32} />
      </Link>
    </div>
  );
};
