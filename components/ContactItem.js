import Image from 'next/image'
import styles from "./Contactbar.module.css";

const ContactItem = ({ text, href, logo }) => {
    return (
      <div>
      <a
        className={styles.contactBarLink} 
        href={href}
        target="_blank"
      >
        {text} 
      </a>
      <Image
        className={styles.contactBarLogo}
        src={logo}
        alt=""
        width={30}
        height={30}
      />
      </div>
    );
};

export default ContactItem;