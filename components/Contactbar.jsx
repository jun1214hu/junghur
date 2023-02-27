import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import ContactItem from "./ContactItem";
import styles from "./Contactbar.module.css";

const MENU_LIST = [
  { text: "Github", href: "https://github.com/jun1214hu", logo: "/images/githubLogo.png"},
  { text: "LinkedIn", href: "https://www.linkedin.com/in/jung-hur-593833155/", logo: "/images/linkedinLogo.png" },
  { text: "Email", href: "mailto:junghur13@gmail.com", logo: "/images/emailLogo.png"},
];
const Contactbar = () => {
  return (
    <header>
      <nav>
      <div className={styles.logo}>
      <Link href={"/"}>
            <Logo />
        </Link>
      </div>
        <div className={styles.menu_list}>
          {MENU_LIST.map((menu, idx) => (
            <div
              key={menu.text}
              className={styles.menu_item}
            >
              <ContactItem {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Contactbar;