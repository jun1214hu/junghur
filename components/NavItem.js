import Link from "next/link";
import styles from "./Navbar.module.css";

const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href} className={styles.nav__link}>
       {text}
    </Link>
  );
};

export default NavItem;