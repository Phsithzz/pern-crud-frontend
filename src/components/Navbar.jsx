//photo
import logo from "../assets/photos/logo.jpg";

//route
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-white">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="LogoSneaker" className="w-20 h-20" />
          <p className="text-3xl font-semibold">Clients</p>
        </div>

        <Link to="Register" className="flex items-center gap-4">
          <button
            type="button"
            className="bg-black w-20 h-10 text-white font-semibold text-lg rounded-3xl transition  ease-in duration-400 active:scale-3 hover:text-black hover:bg-white hover:shadow-md hover:border-2"
          >
            Sign in
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
