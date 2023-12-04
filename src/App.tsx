import { Outlet } from "react-router-dom";
import Footer from "./Components/common/Footer";
import Header from "./Components/common/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
