const Equipment = () => {
  return (
    <div className="px-4 lg:px-20">
      <div className="flex flex-col md:flex-row">
        <div className="mb-10 flex w-full items-center justify-center object-cover md:mb-0 md:w-1/2">
          <img
            src="/images/imageborder.jpg"
            alt=""
            // className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center md:w-1/2">
          <div className="md:ml-10">
            <h1 className=" text-4xl font-extrabold text-mainBrown md:text-5xl lg:text-6xl ">
              Coffee Equipment
            </h1>
            <p className="mt-7 items-center text-base text-mainGray">
              It Is A Long Established Fact That A Reader Will Be Distracted By
              The Readable Content Of A Page When Looking At Its Layout
              Distribution.
            </p>
          </div>
          <div className="mt-5 grid w-full grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 bg-[url('/images/bgImage.png')] bg-center bg-no-repeat bg-cover md:bg-custom xl:bg-auto ss:bg-auto">
            <div className="flex flex-col items-center justify-center space-y-3">
              <img src="/images/maker.svg" alt="" />
              <p className="text-center text-base font-bold text-mainBrown">
                COFFEE MAKER
              </p>
              <p className="w-2/3 text-center text-sm text-secondaryGray">
                Alienum phaedrum torquatos necvis detraxit expetendis pericula.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <img src="/images/grinder.svg" alt="" />
              <p className="text-center text-base font-bold text-mainBrown">
                COFFEE GRINDER
              </p>
              <p className="w-2/3 text-center text-sm text-secondaryGray">
                Many desktop publishing packages as their default model text.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <img src="/images/cups.svg" alt="" />
              <p className="text-center text-base font-bold text-mainBrown">
                ESPRESSO CUPS
              </p>
              <p className="w-2/3 text-center text-sm text-secondaryGray">
                There are many variations of passag the majority have suffered.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-3">
              <img src="/images/machine.svg" alt="" />
              <p className="text-center text-base font-bold text-mainBrown">
                COFFEE MACHINE
              </p>
              <p className="w-2/3 text-center text-sm text-secondaryGray">
                The standard chunk of Lorem used since the 1500s is reprodu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
