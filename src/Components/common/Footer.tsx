import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-white">
          <img src="/images/point.png" alt="" />
          <p className="text-sm font-extrabold">24/7 WE SUPPORT:</p>
          <p>+31 333 303 000, +31 333 303 111</p>
          <p>support@koffie.com</p>
        </div>
      </div>
      <div className="mt-14 flex items-center justify-center">
        <p className="text-white">
          Copyright © 2023 XStore theme. Created by 8theme – WordPress
          WooCommerce themes.
        </p>
      </div>
    </div>
  );
};

export default Footer;
