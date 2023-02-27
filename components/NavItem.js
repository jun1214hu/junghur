import Image from 'next/image'

const NavItem = ({ text, href, logo }) => {
    return (
      <div>
      <a className="contactBarLink" href={href} target="_blank"> {text} </a>
      <Image
        className="contactBarLogo"
        src={logo}
        alt=""
        width={30}
        height={30}
      />
      </div>
    );
};

export default NavItem;