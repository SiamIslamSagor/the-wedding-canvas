import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { BsArrowUpCircle } from "react-icons/bs";

const ScrollTop = () => {
  const { handleTop } = useContext(AuthContext);
  return (
    <div data-aos="fade-right" data-aos-duration="1000" className="text-right">
      <button
        onClick={handleTop}
        className="btn bg-white text-custom-color my-20"
      >
        <BsArrowUpCircle></BsArrowUpCircle>
        BACK TO TOP
      </button>
    </div>
  );
};

export default ScrollTop;
