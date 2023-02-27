import React, { useState } from "react";
import NavItem from "./NavItem";
import styles from "./Navbar.module.css";


const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Resume", href: "/resume"},
  { text: "Portfolio", href: "/portfolio"},
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <div>
      <nav className={styles.nav}>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.nav__menubar}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? styles.active  : ""} ${styles.nav__menulist}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;