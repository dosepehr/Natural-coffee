import Slider from "../common/Slider";
import Title from "../common/Title";

const Discover = () => {
  return (
    <div className="">
      <div className="bg-[url('/images/bg.jpg')] bg-auto bg-center bg-no-repeat py-10">
        <div className="text-center text-white">
          <Title mainTitle="Latest Arrivals" secondTitle="Discover Product" />
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Discover;
