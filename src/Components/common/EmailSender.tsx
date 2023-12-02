import Title from "./Title";

const EmailSender = () => {
  return (
    <div className="bg-100% bg-[#F2ECEC] bg-no-repeat px-5 py-10 md:bg-[url('/images/bg.png')] md:px-14 lg:pt-40 lg:pb-20 xl:pb-32">
      <div className="px mx-auto">
        <div className="md:w-3/4 lg:w-1/2">
          <div className="text-mainBrown">
            <Title mainTitle="Buy 1 Get 1 Free" secondTitle="Roasted Coffee" />
          </div>
          <div>
            <p className="mb-10 text-[#4d4d4d] w-3/4">
              There Are Many Variations Of Passages Of Lorem Ipsum, But The
              Majority Suffered Alteration In Some Form Injected Humour, Or
              Randomised Words Even Slightly.
            </p>
          </div>
          <div>
            <p className="mb-10 text-3xl font-extrabold text-mainBrown">
              -30% Membership Discount
            </p>
          </div>
          <div className="flex items-center w-3/4 lg:w-full">
            <input
              type="text"
              className="grow px-2 py-2"
              placeholder="Enter Email Address"
            />
            <button className="bg-mainBrown px-3 py-2 text-white">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSender;
