import { Link } from "react-router-dom";
const Navbar = () => {
  const LinkStyles =
    "text-base font-extrabold leading-6 text-mainBrown after:duration-300 after:block after:h-[2px] after:w-0 after:bg-mainBrown after:content-[''] hover:after:w-full";
  return (
    <div className="hidden items-center lg:flex">
      <img src="/images/Logo.png" alt="" />
      <div className="ml-5 mt-4 flex space-x-5">
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
          OUR BLOG
        </Link>
        <Link to="/contact-us" className={LinkStyles}>
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
