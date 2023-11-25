import Icons from "./Icons";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="relative z-20 flex items-center justify-between py-5 font-raleway">
      <Navbar />
      <div className="hidden xl:flex">
        <Icons />
      </div>
    </div>
  );
};

export default Header;
