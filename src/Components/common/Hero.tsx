import Button from "../ui/Button";
const Hero = () => {
  return (
    <div className="">
      <div className="lg:px-26 mx-auto flex h-screen justify-center bg-[#F2ECEC] px-5 py-2 sm:mt-20 sm:px-10 md:px-14 lg:mt-0 lg:items-center">
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-40 lg:w-1/2 lg:translate-x-full"></div>
        <div className="absolute right-0 top-0 z-0 h-screen w-full lg:w-1/2">
          <img src="/images/bg.jpg" alt="" className="h-full w-full" />
        </div>

        <div className="relative z-10 flex flex-col space-y-6 px-5">
          <p className="font-alex text-6xl text-mainBrown">Get Your Discount</p>
          <p className="font-roboto text-6xl font-black text-mainBrown">
            Flavored Espresso
          </p>
          <p className=" max-w-[90%] text-sm text-white lg:max-w-[40%] lg:text-mainGray">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words even slightly believable.
          </p>
          <Button content="OUR PRODUCTS" href="shop" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
