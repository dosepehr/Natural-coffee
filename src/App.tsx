import Header from "./Components/common/Header";
import Hero from "./Components/common/Hero";

const App: React.FC = () => {
  return (
    <div className="mx-auto py-2 sm:px-10 md:px-14 lg:px-28">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
