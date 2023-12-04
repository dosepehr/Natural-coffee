import Icons from "./Icons";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="lg:px-26 mx-auto bg-[#F2ECEC] px-5 py-2 sm:px-10 md:px-14">
      <div className="relative z-20 flex items-center justify-between py-5 font-raleway">
        <Navbar />
        <div className="hidden xl:flex">
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default Header;
