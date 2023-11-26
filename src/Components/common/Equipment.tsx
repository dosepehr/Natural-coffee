const Equipment = () => {
  return (
    <div className="px-8 py-20 md:px-0 lg:px-10">
      <div className="flex flex-col lg:flex-row">
        <div className="mb-14 flex w-full items-center justify-center object-cover lg:mb-0 lg:w-1/2">
          <img src="/images/imageborder.jpg" alt="" />
        </div>
        <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
          <div className="lg:ml-10 max-w-2xl ">
            <h1 className="text-4xl font-extrabold text-mainBrown md:text-5xl lg:text-6xl ">
              Coffee Equipment
            </h1>
            <p className="mt-7 items-center text-base text-mainGray">
              It Is A Long Established Fact That A Reader Will Be Distracted By
              The Readable Content Of A Page When Looking At Its Layout
              Distribution.
            </p>
          </div>
          <div className="mt-5 grid w-full grid-cols-1 gap-x-4 gap-y-8 bg-[url('/images/bgImage.png')] bg-cover bg-center bg-no-repeat ss:bg-auto sm:grid-cols-2 lg:bg-custom xl:bg-auto">
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
