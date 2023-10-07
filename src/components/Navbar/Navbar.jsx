import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const links = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/about">ABOUT</NavLink>
      </li>
      <li>
        <NavLink to="/contact">CONTACT</NavLink>
      </li>
      <li>
        <NavLink to="/blog">BLOG</NavLink>
      </li>
    </>
  );
  return (
    <div
      data-aos="slide-down"
      className=" duration-700 sticky top-0  max-lg:bg-black max-lg:text-white lg:bg-white drop-shadow-lg "
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
              tabIndex={0}
              className="menu menu-sm bg-[#27272a] dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="normal-case md:text-3xl lg:text-5xl text-custom-color font-stylishFont ">
            TheWeddingCanvas
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
