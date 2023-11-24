import Icons from "./Icons";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="font-raleway relative z-20 flex items-center justify-between py-5">
      <Navbar />
      <Icons />
    </div>
  );
};

export default Header;
