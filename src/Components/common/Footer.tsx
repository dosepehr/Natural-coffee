import { IoCodeSlash } from "react-icons/io5";
import { VscCoffee } from "react-icons/vsc";
import Socials from "../layout/Socials";
const Footer = () => {
  return (
    <div className="bg-[url('/images/bg-footer.png')] px-5 py-16  selection:bg-black">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
        <div className="flex flex-col items-center justify-center space-y-2 text-white">
          <img src="/images/point.png" alt="" />
          <p className="text-sm font-extrabold">OUR ADDRESS</p>
          <p>869 General Village Apt. 645,</p>
          <p>Moorebury</p>
        </div>
        <div>
          <img src="/images/footer-logo.png" alt="" className="mx-auto" />
          <div className="mt-10 flex space-x-8 text-2xl text-white">
            <Socials />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-white">
          <img src="/images/point.png" alt="" />
          <p className="text-sm font-extrabold">24/7 WE SUPPORT:</p>
          <p>+31 333 303 000, +31 333 303 111</p>
          <p>support@koffie.com</p>
        </div>
      </div>
      <div className="mt-14 flex flex-col items-center justify-center">
        <p className="text-white">Copyright © 2023 XStore theme.</p>
        <p className="mt-3 flex items-center text-white">
          code with
          <p className="mx-2 text-lg text-secondaryBrown">
            <IoCodeSlash />
          </p>
          and
          <p className="mx-2 text-lg text-secondaryBrown">
            <VscCoffee />
          </p>
          by
          <a
            href="https://github.com/dosepehr"
            className="mx-2 text-secondaryBrown transition-all duration-300 after:block after:h-[2px] after:w-0 after:bg-secondaryBrown after:duration-300 after:content-[''] hover:text-white hover:after:w-full"
          >
            do sepehr
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
