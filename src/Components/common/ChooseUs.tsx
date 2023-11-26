import Title from "./Title";

const ChooseUs = () => {
  return (
    <div className="bg-[url('/images/Background.png')] selection:bg-black">
      <div className="bg-[url('/images/Bean-Image.png')] bg-auto bg-center bg-no-repeat py-40 text-center text-white">
        <Title MainTitle="Why Choose Us" secondTitle="XStore Сoffee Demo" />
        <p className="mx-auto max-w-4xl text-tertiaryGray">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration, by injected humour, or
          randomised words which don’t look even slightly believable If you are
          going to use a passage, you need to be sure there isn’t anything
          embarrassing hidden in the middle of text.
        </p>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-4 md:space-x-4">
          <div className="text-center sm:text-start">
            <img src="/images/Beans.svg" alt="" className="mx-auto sm:mx-0" />
            <p className=" my-4 text-xl font-extrabold text-white">
              The Best World Sorts
            </p>
            <p className="text-tertiaryGray ">
              It is a long established fact that reader be distracted by the
              readable contents when looking layout.
            </p>
          </div>
          <div className="text-center sm:text-start">
            <img src="/images/shop.svg" alt="" className="mx-auto sm:mx-0" />
            <p className=" my-4 text-xl font-extrabold text-white">
              Many Points of Sale
            </p>
            <p className="text-tertiaryGray ">
              Contrary to popular beli, Lorem Ipsums not simply random text. It
              has root piece of classical from 45 BC.
            </p>
          </div>
          <div className="text-center sm:text-start">
            <img src="/images/barista.svg" alt="" className="mx-auto sm:mx-0" />
            <p className=" my-4 text-xl font-extrabold text-white">
              Professional Baristas
            </p>
            <p className="text-tertiaryGray ">
              The standard chunk of Lorem Ipsumiy useding since the 1500s is
              reproduced below for those interested.
            </p>
          </div>
          <div className="text-center sm:text-start">
            <img
              src="/images/delivery.svg"
              alt=""
              className="mx-auto sm:mx-0"
            />
            <p className=" my-4 text-xl font-extrabold text-white">
              24/7 Fast Delivery
            </p>
            <p className="text-tertiaryGray ">
              Lorem Ipsum is simply dummy text of the printings and typesetting
              industriy Ipsum has been the industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
