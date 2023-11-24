const Hero = () => {
  return (
    <>
      <div className="flex h-screen items-center">
        <img
          src="/images/hero.jpg"
          className="absolute right-0 top-0 h-screen w-1/2"
          alt=""
        />
        <div className="flex flex-col space-y-6">
          <p className="font-alex text-6xl text-mainBrown">Get Your Discount</p>
          <p className="font-roboto text-6xl font-black text-mainBrown">
            Flavored Espresso
          </p>
          <p className="max-w-[40%] text-sm text-mainGray ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words even slightly believable.
          </p>
          {/* <img src="/images/Product.png" className="absolute right-1/2 translate-x-1/2" alt="" /> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
