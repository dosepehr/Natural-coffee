import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center">
      <img src="/images/Logo.png" alt="" />
      <div className="ml-5 mt-4 hidden w-full space-x-4 md:flex ">
        <Link
          to="/"
          className="text-white text-base font-extrabold leading-6 lg:text-mainBrown after:block after:h-[2px] after:w-0 after:bg-mainBrown after:duration-300 after:content-[''] hover:after:w-full"
        >
          HOME
        </Link>
        <Link
          to="/shop"
          className="text-white text-base font-extrabold leading-6 lg:text-mainBrown after:block after:h-[2px] after:w-0 after:bg-mainBrown after:duration-300 after:content-[''] hover:after:w-full"
        >
          SHOP
        </Link>
        <Link
          to="/about-us"
          className="text-white text-base font-extrabold leading-6 lg:text-mainBrown after:block after:h-[2px] after:w-0 after:bg-mainBrown after:duration-300 after:content-[''] hover:after:w-full"
        >
          ABOUT US
        </Link>
        <Link
          to="/blog"
          className="text-white text-base font-extrabold leading-6 lg:text-mainBrown after:block after:h-[2px] after:w-0 after:bg-mainBrown after:duration-300 after:content-[''] hover:after:w-full"
        >
          OUR BLOG
        </Link>
        <Link
          to="/contact-us"
          className="text-white text-base font-extrabold leading-6 lg:text-mainBrown after:block after:h-[2px] after:w-0 after:bg-mainBrown after:duration-300 after:content-[''] hover:after:w-full"
        >
          CONTACT US
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
