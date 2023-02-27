import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Github", href: "https://github.com/jun1214hu", brandLogo:"/public/images/githubLogo.svg"},
  { text: "LinkedIn", href: "https://www.linkedin.com/in/jung-hur-593833155/", brandLogo: "/public/images/LinkedInLogo.svg" },
  { text: "Email", href: "https://github.com/jun1214hu", brandLogo: "/public/images/emailLogo.svg"},
];
const Navbar = () => {
  return (
    <header>
      <nav className="contactbar">
      <div className="logo">
      <Link href={"/"}>
            <Logo />
        </Link>
      </div>
        <div className="menu_list">
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
              className="menu_item"
            >
              <NavItem {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Contactbar;