import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import "../styles/navbar.css"

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className="navbar">
      <div className="logo">
      <Link href={"/"}>
            <Logo />
        </Link>
      </div>
        <div className={`${navActive ? "active" : ""} menu_list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
              className="menu_item"
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;