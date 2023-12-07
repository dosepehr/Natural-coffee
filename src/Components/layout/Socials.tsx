import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Socials = () => {
  return (
    <>
      <p className="cursor-pointer transition-all duration-300 hover:text-secondaryBrown">
        <FaFacebookF />
      </p>
      <p className="cursor-pointer transition-all duration-300 hover:text-secondaryBrown">
        <FaXTwitter />
      </p>
      <p className="cursor-pointer transition-all duration-300 hover:text-secondaryBrown">
        <FaInstagram />
      </p>
      <p className="cursor-pointer transition-all duration-300 hover:text-secondaryBrown">
        <FaLinkedinIn />
      </p>
      <p className="cursor-pointer transition-all duration-300 hover:text-secondaryBrown">
        <FaYoutube />
      </p>
    </>
  );
};

export default Socials;
