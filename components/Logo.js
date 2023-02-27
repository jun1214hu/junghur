import React from "react";
import Image from "next/image";
import styles from "./Contactbar.module.css";

const Logo = () => {
    return <Image
              priority
              className={styles.logo}
              src="/images/logo.png"
              height={140}
              width={200}
              alt={"Jung Hur"} />};

export default Logo;