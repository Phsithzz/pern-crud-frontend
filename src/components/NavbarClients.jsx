//photo
import logo from "../assets/photos/logo.jpg";

//route
import { Link } from "react-router-dom";

const NavbarClients = ({ onOpen, onSearch }) => {
  const handleOnChange = (e) => {
    onSearch(e.target.value);
  };
  return (
    <>
      <div className="flex justify-between items-center bg-white">
        <div className="flex gap-2 items-center">
          <img src={logo} alt="LogoSneaker" className="w-20 h-20" />
          <p className="text-3xl font-semibold">Clients</p>
        </div>
        <div className="flex  items-center gap-14">
          <Link
            to="/"
            className="text-lg font-semibold transition ease-in duration-400 hover:border-b-2"
          >
            Home
          </Link>
          <div className="flex items-center ">
            <input
              type="text"
              className="border-3 rounded-md outline-none placeholder:text-xs placeholder:pl-2 transition duration:300 focus:border-red-500  "
              placeholder="Search"
              onChange={handleOnChange}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="bg-black w-26 h-10 text-white font-semibold text-lg rounded-3xl transition  ease-in duration-400 active:scale-3 hover:text-black hover:bg-white hover:shadow-md hover:border-2"
        >
          Add Client
        </button>
      </div>
    </>
  );
};

export default NavbarClients;
