import ChooseUs from "../common/ChooseUs";
import EmailSender from "../common/EmailSender";
import Equipment from "../common/Equipment";
import Discover from "../layout/Discover";
import Hero from "../common/Hero";
const Home = () => {
  return (
    <>
      <Hero />
      <Equipment />
      <ChooseUs />
      <Discover />
      <EmailSender />
    </>
  );
};

export default Home;
