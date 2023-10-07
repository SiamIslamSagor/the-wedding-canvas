import { FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer footer-center p-10 text-custom-color  py-16 border-y-2 border-[#bc9b6a]">
        <aside>
          <h2 className="text-6xl text-custom-color font-stylishFont">
            The Wedding Canvas
          </h2>
          <p className="font-bold">
            Your source of wedding inspiration and planning.
            <br />
            Lets create your dream day together!
          </p>
          <p>Contact Us: contact@theweddingcanvas.com</p>
          <p>Address: 123 Main Street, City, Country</p>
        </aside>
        <nav>
          <p className="text-gray-500 uppercase mb-2">find us on</p>

          <div className="grid grid-flow-col gap-4">
            <a className="bg-[#bc9b6a] p-2 rounded-full text-white text-xl cursor-pointer hover:bg-[#a16207] duration-500">
              <FaFacebookF></FaFacebookF>
            </a>
            <a className="bg-[#bc9b6a] p-2 rounded-full text-white text-xl cursor-pointer hover:bg-[#a16207] duration-500">
              <AiFillInstagram></AiFillInstagram>
            </a>
            <a className="bg-[#bc9b6a] p-2 rounded-full text-white text-xl cursor-pointer hover:bg-[#a16207] duration-500">
              <FaTiktok></FaTiktok>
            </a>
            <a className="bg-[#bc9b6a] p-2 rounded-full text-white text-xl cursor-pointer hover:bg-[#a16207] duration-500">
              <AiFillYoutube></AiFillYoutube>
            </a>
            <a className="bg-[#bc9b6a] p-2 rounded-full text-white text-xl cursor-pointer hover:bg-[#a16207] duration-500">
              <FaLinkedinIn></FaLinkedinIn>
            </a>
            <a className="bg-[#bc9b6a] p-2 rounded-full text-white text-xl cursor-pointer hover:bg-[#a16207] duration-500">
              <FaXTwitter></FaXTwitter>
            </a>
          </div>
        </nav>
        <div className="form-control">
          <span className="label-text uppercase">
            -BE THE FIRST TO HEAR FROM US-
          </span>
          <div>
            <input
              type="text"
              className="outline-none py-3 px-4 border rounded-l-full border-[#bc9b6a]"
              name=""
              id=""
            />
            <button className="border border-[#bc9b6a] bg-[#bc9b6a] text-white font-medium py-3 px-4 rounded-r-full hover:bg-white duration-700 hover:text-[#bc9b6a]">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#bc9b6a]"></div>
      <div className="text-center">
        <p className="text-gray-500  my-2 mb-2">
          Copyright © 2023 - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
