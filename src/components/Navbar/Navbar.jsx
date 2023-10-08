import defaultProfile from "../../assets/default_profile.jpg";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast("Log Out successfully");
      })
      .catch(() => {
        toast("Log Out error");
      });
  };

  const location = useLocation();
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, [location]);
  const links = (
    <>
      <li className="hover:font-medium">
        <NavLink className="hover:text-[#bc9b6a] max-2xl:px-2" to="/">
          HOME
        </NavLink>
      </li>
      <li className="hover:font-medium">
        <NavLink className="hover:text-[#bc9b6a] max-2xl:px-2" to="/wedding">
          WEDDING
        </NavLink>
      </li>
      <li className="hover:font-medium">
        <NavLink className="hover:text-[#bc9b6a] max-2xl:px-2" to="/rooms">
          ROOMS & SUITES
        </NavLink>
      </li>
      <li className="hover:font-medium">
        <NavLink className="hover:text-[#bc9b6a] max-2xl:px-2" to="/gallery">
          GALLERY
        </NavLink>
      </li>
      <li className="hover:font-medium">
        <NavLink className="hover:text-[#bc9b6a] max-2xl:px-2" to="/about">
          ABOUT
        </NavLink>
      </li>
      <li className="hover:font-medium sm:hidden">
        <NavLink className="hover:text-[#bc9b6a]" to="/login">
          Login
        </NavLink>
      </li>
      <li className="hover:font-medium sm:hidden">
        <NavLink className="hover:text-[#bc9b6a]" to="/register">
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      // data-aos="slide-down"
      data-aos-duration="600"
      className="z-50  duration-700 sticky top-0  max-lg:bg-black max-lg:text-white lg:bg-white lg:text-custom-color drop-shadow-lg "
    >
      <div className="navbar lg:bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-8 md:w-8 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              data-aos="slide-up"
              tabIndex={0}
              className="menu menu-sm bg-[#111827] dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="normal-case md:text-3xl lg:text-5xl text-custom-color font-logoFont text-center my-2 border-y border-[#bc9b6a]">
            The Wedding Canvas
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="  max-md:hidden">
            {user ? (
              <button
                onClick={handleLogOut}
                className="py-2 mr-4 text-custom-color px-3 lg:px-6  border border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2"
              >
                Log Out
              </button>
            ) : (
              <div className="flex">
                <NavLink to="register">
                  <button className="py-2 text-custom-color px-3 lg:px-6  border border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2">
                    Register
                  </button>
                </NavLink>
                <NavLink to="/login">
                  <button className="py-2 mx-4 text-custom-color px-3 lg:px-6  border border-[#bc9b6a] rounded-full hover:bg-[#bc9b6a] hover:text-white duration-700 flex items-center gap-2">
                    Login
                  </button>
                </NavLink>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <div>
              <h4>{user?.displayName}</h4>
            </div>

            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#111827] rounded-box w-52 md:hidden"
                >
                  <li>
                    <a className="hover:text-[#bc9b6a]">Settings</a>
                  </li>
                  <li>
                    <a onClick={handleLogOut} className="hover:text-[#bc9b6a]">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <img
                  className="h-12 rounded-full"
                  src={defaultProfile}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
