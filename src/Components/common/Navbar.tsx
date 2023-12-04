import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="relative top-0">
      <div className="flex items-center">
        <div className="pl-5">
          <img src="/images/Logo.png" alt="" />
        </div>
        <div className="ml-5 mt-4 hidden w-full space-x-4 md:flex">
          <Link
            to="/"
            className="text-base font-extrabold leading-6 text-white after:block after:h-[2px] after:w-0 after:bg-mainBrown after:duration-300 after:content-[''] hover:after:w-full lg:text-mainBrown"
          >
            HOME
          </Link>
          <Link
            to="/shop"
            className="text-base font-extrabold leading-6 text-white after:block after:h-[2px] after:w-0 after:bg-mainBrown after:duration-300 after:content-[''] hover:after:w-full lg:text-mainBrown"
          >
            SHOP
          </Link>
          <Link
            to="/about-us"
            className="text-base font-extrabold leading-6 text-white after:block after:h-[2px] after:w-0 after:bg-mainBrown after:duration-300 after:content-[''] hover:after:w-full lg:text-mainBrown"
          >
            ABOUT US
          </Link>
          <Link
            to="/blog"
            className="text-base font-extrabold leading-6 text-white after:block after:h-[2px] after:w-0 after:bg-mainBrown after:duration-300 after:content-[''] hover:after:w-full lg:text-mainBrown"
          >
            OUR BLOG
          </Link>
          <Link
            to="/contact-us"
            className="text-base font-extrabold leading-6 text-white after:block after:h-[2px] after:w-0 after:bg-mainBrown after:duration-300 after:content-[''] hover:after:w-full lg:text-mainBrown"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
