import Equipment from "./Components/common/Equipment";
import Header from "./Components/common/Header";
import Hero from "./Components/common/Hero";

const App: React.FC = () => {
  return (
    <div className="mx-auto bg-[#F2ECEC] py-2 sm:px-10 md:px-14 lg:px-26">
      <Header />
      <Hero />
      <Equipment />
    </div>
  );
};

export default App;
