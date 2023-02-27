import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Github", href: "https://github.com/jun1214hu", logo: "/images/githubLogo.png"},
  { text: "LinkedIn", href: "https://www.linkedin.com/in/jung-hur-593833155/", logo: "/images/linkedinLogo.png" },
  { text: "Email", href: "mailto: junghur13@gmail.com", logo: "/images/emailLogo.png"},
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className="contactbar">
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