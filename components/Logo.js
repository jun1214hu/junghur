import React from "react";
import Image from "next/image";

const Logo = () => {
    return <Image
              priority
              className="logo"
              src="/images/logo.png"
              height={140}
              width={200}
              alt={"Jung Hur"} />};

export default Logo;