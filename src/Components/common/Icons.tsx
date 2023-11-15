import { CiSearch, CiUser, CiHeart, CiShoppingBasket } from "react-icons/ci";
const Icons = () => {
  const iconStyles = "text-3xl font-extrabold text-white";
  return (
    <div className="flex bg-red-500 items-center mt-4">
      <p className="border-r border-white pr-8 text-sm font-black text-white selection:bg-black">
        FREE SHIPPING ON ORDER OVER $100
      </p>
      <div className="flex space-x-5">
        <CiSearch className={iconStyles} />
        <CiUser className={iconStyles} />
        <CiHeart className={iconStyles} />
        <CiShoppingBasket className={iconStyles} />
      </div>
    </div>
  );
};

export default Icons;
