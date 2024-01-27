import React, { useState } from "react";
import { FaUser, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.scss";

const data = [
  { label: "PROFILE", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "RESUME", to: "/resume" },
  { label: "CONTACT", to: "/contact" }
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const menuHandler = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <div>
      <nav className="Navbar">
        <div className="Navbar_container">
          <Link to={"/"} className="Navbar_container_logo">
            <FaUser size={30} />
          </Link>
        </div>

        <ul className={`Navbar_container_menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="Navbar_container_menu_item">
              <Link to={item.to} className="Navbar_container_menu_item_links">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="Nav_icon" onClick={menuHandler}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
