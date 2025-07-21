//components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
const LayoutHome = () => {
  return (
    <>
      <div className="flex flex-col px-30 py-4 ">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default LayoutHome;
