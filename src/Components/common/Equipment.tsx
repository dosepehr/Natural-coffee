const Equipment = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <img src="/images/imageborder.jpg" alt="" />
      <div className="flex flex-col items-center justify-center">
        <div className="ml-10">
          <h1 className="text-7xl font-extrabold text-mainBrown">
            Coffee Equipment
          </h1>
          <p className="text-mainGray mt-7 items-center text-base">
            It Is A Long Established Fact That A Reader Will Be Distracted By
            The Readable Content Of A Page When Looking At Its Layout
            Distribution.
          </p>
        </div>
        <div className="mt-5 grid w-full grid-cols-2 gap-x-4 gap-y-8">
          <div className="flex flex-col items-center justify-center space-y-3">
            <img src="/images/maker.svg" alt="" />
            <p className="text-base font-bold text-mainBrown">COFFEE MAKER</p>
            <p className="text-secondaryGray w-2/3 text-center text-sm">
              Alienum phaedrum torquatos necvis detraxit expetendis pericula.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <img src="/images/grinder.svg" alt="" />
            <p className="text-base font-bold text-mainBrown">COFFEE GRINDER</p>
            <p className="text-secondaryGray w-2/3 text-center text-sm">
              Many desktop publishing packages as their default model text.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <img src="/images/cups.svg" alt="" />
            <p className="text-base font-bold text-mainBrown">ESPRESSO CUPS</p>
            <p className="text-secondaryGray w-2/3 text-center text-sm">
              There are many variations of passag the majority have suffered.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <img src="/images/machine.svg" alt="" />
            <p className="text-base font-bold text-mainBrown">COFFEE MACHINE</p>
            <p className="text-secondaryGray w-2/3 text-center text-sm">
              The standard chunk of Lorem used since the 1500s is reprodu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
