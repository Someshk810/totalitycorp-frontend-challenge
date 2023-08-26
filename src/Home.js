import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";


const Home = () => {
  const data = {
    name: "SHOP KART",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
    
    </>
  );
};

export default Home;
