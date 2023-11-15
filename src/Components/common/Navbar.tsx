import { Link } from "react-router-dom";
const Navbar = () => {
  const LinkStyles = "text-mainBrown text-base font-extrabold leading-6";
  return (
    <div className="hidden lg:flex items-center">
      <img src="/images/Logo.png" alt="" />
      <div className="flex space-x-8  ml-20 mt-4">
        <Link to="/" className={LinkStyles}>
          HOME
        </Link>
        <Link to="/shop" className={LinkStyles}>
          SHOP
        </Link>
        <Link to="/about-us" className={LinkStyles}>
          ABOUT US
        </Link>
        <Link to="/blog" className={LinkStyles}>
          OUT BLOG
        </Link>
        <Link to="/contact-us" className={LinkStyles}>
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
