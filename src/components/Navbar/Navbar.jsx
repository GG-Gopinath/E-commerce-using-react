import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Asserts/logo.png";
import cart_icon from "../Asserts/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const menuItems = [
    { name: "shop", label: "Shop", path: "/" },
    { name: "mens", label: "Men", path: "/mens" },
    { name: "womens", label: "Womens", path: "/womens" },
    { name: "kids", label: "Kids", path: "/kids" },
  ];

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => {
              setMenu(item.name);
            }}
          >
            <Link to={item.path} style={{ textDecoration: "none" }}>
              {item.label}
            </Link>
            {menu === item.name && <hr />}
          </li>
        ))}
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
