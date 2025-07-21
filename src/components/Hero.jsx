//icons
import { GoArrowUpRight } from "react-icons/go";
//photos
import hero1 from "../assets/photos/hero1.jpg";
//router
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="flex justify-around items-center  bg-black h-150 py-20">
        <div className="left">
          <img src={hero1} alt="Sneaker 1" className="h-120 " />
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-6xl text-white">
            Enjoy Your
            <br />
            Clients Sneakers
          </h1>

          <Link
            to="/product"
            className="group flex gap-2 items-center justify-center bg-white  rounded-3xl w-fit h-10 transition ease-in duration-400 hover:bg-red-400 hover:text-white"
          >
            <button type="button" className="font-semibold px-2 text-lg ">
              Check Now
            </button>
            <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center transition ease-in duration-400 group-hover:bg-white">
              <GoArrowUpRight className="font-semibold text-white text-2xl transition ease-in duration-400 group-hover:text-black" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
