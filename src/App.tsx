import ChooseUs from "./Components/common/ChooseUs";
import Equipment from "./Components/common/Equipment";
import Header from "./Components/common/Header";
import Discover from "./Components/layout/Discover";
// import Hero from "./Components/common/Hero";

const App: React.FC = () => {
  return (
    <>
      <div className="lg:px-26 mx-auto bg-[#F2ECEC] py-2 sm:px-10 md:px-14">
        <Header />
        {/* <Hero /> */}
        <Equipment />
      </div>
      <ChooseUs />
      <Discover />
    </>
  );
};

export default App;
