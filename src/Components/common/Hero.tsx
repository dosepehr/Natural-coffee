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
          <p className="text-6xl text-mainBrown">get your discount</p>
          <p className="text-6xl font-black text-mainBrown">
            flavored espresso
          </p>
          <p className="text-mainGray max-w-[40%] text-sm ">
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
